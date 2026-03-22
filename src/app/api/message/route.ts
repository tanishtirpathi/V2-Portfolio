type SendMessageBody = {
	message?: string;
};

const TELEGRAM_API_BASE = "https://api.telegram.org";
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;

type RateLimitEntry = {
	count: number;
	resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: Request) {
	const forwardedFor = request.headers.get("x-forwarded-for");
	if (forwardedFor) {
		const firstIp = forwardedFor.split(",")[0]?.trim();
		if (firstIp) {
			return firstIp;
		}
	}

	const realIp = request.headers.get("x-real-ip")?.trim();
	if (realIp) {
		return realIp;
	}

	return "unknown";
}

function applyIpRateLimit(ip: string) {
	const now = Date.now();

	for (const [key, entry] of rateLimitStore.entries()) {
		if (entry.resetAt <= now) {
			rateLimitStore.delete(key);
		}
	}

	const existingEntry = rateLimitStore.get(ip);

	if (!existingEntry || existingEntry.resetAt <= now) {
		rateLimitStore.set(ip, {
			count: 1,
			resetAt: now + RATE_LIMIT_WINDOW_MS,
		});
		return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, retryAfterSeconds: 0 };
	}

	if (existingEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
		const retryAfterSeconds = Math.max(1, Math.ceil((existingEntry.resetAt - now) / 1000));
		return { allowed: false, remaining: 0, retryAfterSeconds };
	}

	existingEntry.count += 1;
	rateLimitStore.set(ip, existingEntry);

	return {
		allowed: true,
		remaining: RATE_LIMIT_MAX_REQUESTS - existingEntry.count,
		retryAfterSeconds: 0,
	};
}

export async function POST(request: Request) {
	try {
		const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
		const telegramChatId = process.env.TELEGRAM_CHAT_ID;

		if (!telegramBotToken || !telegramChatId) {
			return Response.json(
				{
					success: false,
					error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.",
				},
				{ status: 500 }
			);
		}

		const clientIp = getClientIp(request);
		const rateLimitResult = applyIpRateLimit(clientIp);

		if (!rateLimitResult.allowed) {
			return Response.json(
				{
					success: false,
					error: "Rate limit exceeded. Only 10 messages are allowed per IP in 24 hours.",
				},
				{
					status: 429,
					headers: {
						"Retry-After": String(rateLimitResult.retryAfterSeconds),
					},
				}
			);
		}

		const body = (await request.json()) as SendMessageBody;
		const userMessage = body.message?.trim();

		if (!userMessage) {
			return Response.json({ success: false, error: "Message is required." }, { status: 400 });
		}

		const formattedMessage = [
			"New message from website",
			"",
			userMessage.slice(0, 1000),
		].join("\n");

		const telegramResponse = await fetch(
			`${TELEGRAM_API_BASE}/bot${telegramBotToken}/sendMessage`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: formattedMessage,
				}),
				cache: "no-store",
			}
		);

		if (!telegramResponse.ok) {
			const telegramError = (await telegramResponse.json()) as { description?: string };
			return Response.json(
				{
					success: false,
					error: telegramError.description ?? "Telegram API rejected the request.",
				},
				{ status: 502 }
			);
		}

		return Response.json({
			success: true,
			remainingMessagesFromIp: rateLimitResult.remaining,
		});
	} catch {
		return Response.json(
			{
				success: false,
				error: "Invalid request body or unexpected server error.",
			},
			{ status: 500 }
		);
	}
}
