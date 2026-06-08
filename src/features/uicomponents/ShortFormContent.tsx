"use client";
import { shortFormContent } from "@/data/shortFormContent";

export function ShortFormContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shortFormContent.map((item) => (
        <div
          key={item.id}
          className="group relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-black flex items-center justify-center"
          style={{ aspectRatio: "auto" }}
        >
          <video
            src={item.videoUrl}
            controls
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            controlsList="nodownload"
          />
        </div>
      ))}
    </div>
  );
}
