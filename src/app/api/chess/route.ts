export async function GET() {
  const [profileRes, statsRes] = await Promise.all([
    fetch("https://api.chess.com/pub/player/tanishtirpathi", {
      headers: { "User-Agent": "tanishtirpathi.me" },
    }),
    fetch("https://api.chess.com/pub/player/tanishtirpathi/stats", {
      headers: { "User-Agent": "tanishtirpathi.me" },
    }),
  ]);

  const profile = await profileRes.json();
  const stats = await statsRes.json();

  return Response.json({ profile, stats });
}