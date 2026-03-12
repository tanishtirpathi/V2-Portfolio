"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ChessData {
  profile: {
    avatar?: string;
    username: string;
    followers: number;
    status: string;
  };
  stats: {
    chess_blitz?: { last: { rating: number }; record: { win: number; loss: number; draw: number } };
    chess_rapid?: { last: { rating: number }; record: { win: number; loss: number; draw: number } };
    chess_bullet?: { last: { rating: number }; record: { win: number; loss: number; draw: number } };
  };
}

export default function ChessCard() {
  const [data, setData] = useState<ChessData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/chess")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <a
      href="https://www.chess.com/member/tanishtirpathi"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-neutral-700 hover:border-neutral-500 transition-all bg-neutral-900 hover:bg-neutral-800"
    >
      {/* Avatar */}
      <div className="relative w-12 h-12 shrink-0">
        {data?.profile?.avatar ? (
          <Image
            src={data.profile.avatar}
            alt="Chess.com avatar"
            width={48}
            height={48}
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-neutral-700 animate-pulse" />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-white text-sm">Chess.com</h3>
          {data?.profile?.status === "premium" && (
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full">
              Premium
            </span>
          )}
        </div>

        {data ? (
          <p className="text-xs text-neutral-400">
            ⚡ {data.stats.chess_blitz?.last?.rating ?? "—"}
            &nbsp;·&nbsp;
            🕐 {data.stats.chess_rapid?.last?.rating ?? "—"}
            &nbsp;·&nbsp;
            🔫 {data.stats.chess_bullet?.last?.rating ?? "—"}
          </p>
        ) : (
          <div className="h-3 w-32 bg-neutral-700 rounded animate-pulse mt-1" />
        )}

        <p className="text-xs text-neutral-500">
          {data ? `${data.profile.followers} followers` : ""}
        </p>
      </div>
    </a>
  );
}