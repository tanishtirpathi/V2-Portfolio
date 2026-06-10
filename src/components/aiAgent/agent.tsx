"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Loader, Sparkles, Copy, Check } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  sourceDocuments?: any[];
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Store the input before clearing it
    const userQuestion = input;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: userQuestion,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
          collectionName: "portfolio",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to get response");
      }

      const data = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: data.response,
        timestamp: new Date(),
        sourceDocuments: data.sourceDocuments,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
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
      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110 active:scale-95 group"
        aria-label="Open AI Chat"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse" />
        {isOpen ? (
          <X size={24} className="relative z-10" />
        ) : (
          <>
            <Sparkles size={24} className="relative z-10 group-hover:animate-spin" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 w-96 max-w-[calc(100vw-2rem)] h-[600px] rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white p-5 flex items-center justify-between sticky top-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Sparkles size={20} className="text-yellow-200" />
              </div>
              <div>
                <h3 className="font-bold text-base">AI Assistant</h3>
                <p className="text-xs text-blue-100 font-medium">Ask anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-all hover:scale-110 active:scale-95"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center mx-auto">
                    <Sparkles size={32} className="text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Welcome! 👋
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Ask me about Tanish's skills, projects, or experience
                    </p>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl transition-all ${
                    message.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md rounded-br-none"
                      : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200 dark:border-slate-700 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                  
                  {message.sourceDocuments && message.sourceDocuments.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-600">
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        📚 Sources:
                      </p>
                      <div className="space-y-1">
                        {message.sourceDocuments.slice(0, 3).map((doc, idx) => (
                          <div
                            key={idx}
                            className="text-xs bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-600"
                          >
                            <p className="text-slate-600 dark:text-slate-300">
                              • {doc.payload?.title || `Source ${idx + 1}`}{" "}
                              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                ({(doc.score * 100).toFixed(0)}%)
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-opacity-20 border-current gap-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {message.type === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(message.content, message.id)}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                        title="Copy response"
                      >
                        {copiedId === message.id ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl rounded-bl-none flex items-center gap-2 shadow-sm">
                  <Loader size={16} className="animate-spin text-blue-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    Thinking...
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-4 py-3 rounded-xl text-sm border border-red-200 dark:border-red-800 shadow-sm">
                  <p className="font-medium">Error</p>
                  <p className="text-xs mt-1">{error}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900 shadow-md">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2.5 rounded-xl transition-all flex items-center justify-center hover:shadow-lg active:scale-95 font-medium"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Press Enter to send • Powered by AI
            </p>
          </div>
        </div>
      )}
    </>
  );
}
