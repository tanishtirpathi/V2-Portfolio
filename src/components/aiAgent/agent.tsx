"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  X,
  Loader,
  Brain,
  Copy,
  Check,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  sourceDocuments?: any[];
  reasoning?: string | null;
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ✅ FIX: hydration-safe rendering
  const [mounted, setMounted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userQuestion = input;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: userQuestion,
      timestamp: new Date(),
    };

    // ✅ FIX: include new message immediately for API context
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const apiMessages = updatedMessages.map((msg) => ({
        role: msg.type === "user" ? "user" : "assistant",
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
          collectionName: "portfolio",
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: data.response,
        timestamp: new Date(),
        sourceDocuments: data.sourceDocuments,
        reasoning: data.reasoning || null,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 
        rounded-full bg-blue-500 text-white flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <Brain size={24} />}
      </button>

      {/* Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 w-66 h-[400px]
         bg-white dark:bg-black/90 rounded-2xl shadow-2xl flex flex-col
          overflow-hidden dark:shadow-white/20 dark:border dark:border-white/20 ">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <p className="text-center text-sm text-gray-500">
                Ask anything about me 🚀
              </p>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-xs text-xs font-main ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-slate-800"
                  }`}
                >
                  <p>{message.content}</p>

                  {/* ✅ FIX: hydration-safe timestamp */}
                  <div className="text-[10px] opacity-60 mt-1">
                    {mounted
                      ? message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : null}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-sm">
                <Loader className="animate-spin" size={16} />
                Thinking...
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
              placeholder="Ask something..."
            />

            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}