"use client";

import { FormEvent, useState } from "react";

export default function Message() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [statusText, setStatusText] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedMessage = message.trim();
        if (!trimmedMessage) {
            setStatus("error");
            setStatusText("Please type a message first.");
            return;
        }

        try {
            setStatus("sending");
            setStatusText("");

            const response = await fetch("/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: trimmedMessage }),
            });

            const data = (await response.json()) as { error?: string; success?: boolean };

            if (!response.ok || !data.success) {
                throw new Error(data.error ?? "Failed to send message.");
            }

            setStatus("success");
            setStatusText("Message sent on Telegram.");
            setMessage("");
        } catch (error) {
            setStatus("error");
            setStatusText(
                error instanceof Error ? error.message : "Something went wrong while sending your message."
            );
        }
    };

    return (
        <section className="message w-full max-w-2xl rounded-2xl  py-5 
             backdrop-blur-sm ">
            <h2 className="text-2xl font-bold font-sans text-black dark:text-gray-300">
                DM me 
            </h2>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Type your message here... { Name:mesaage }"
                    rows={1}
                    maxLength={100}
                    className="w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-2 
                    font-serif italic font-medium
                    text-base outline-none transition focus:border-black/40 dark:border-white/20 
                    dark:bg-black/40"
                />

                <div className="flex items-center gap-3 ">
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className=" cursor-pointer rounded-md
                        bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black 
                        transition  disabled:cursor-not-allowed 
                        disabled:opacity-60 dark:bg-white/80 dark:text-black dark:hover:bg-white "
                    >
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>

                    {statusText ? (
                        <p className={status === "error" ? "text-sm text-red-600" : "text-sm text-green-600"}>
                            {statusText}
                        </p>
                    ) : null}
                </div>
            </form>
        </section>
    );
}