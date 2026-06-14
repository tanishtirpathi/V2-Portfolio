"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShortFormContent } from "@/features/uicomponents/ShortFormContent";
import { Link } from "lucide-react";

export default function ContentPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-[#0a0a0a] dark:to-gray-950 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-16 mt-10 flex flex-col items-center text-center gap-4">
                    <h1 className="text-4xl md:text-5xl font-serif italic font-bold 
          text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 
          dark:from-white dark:to-gray-300 mb-1">
                        Short Form Content
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                        check the latest edits of my content    from instagram and the x        </p>
                </div>
                <div className="flex flex-col items-center justify-center mb-8">
    <RainbowButton variant="outline">
        <a
            href="https://www.instagram.com/p/DZiyt76zEH5/"
            target="_blank"
            className="font-main font-semibold flex items-center gap-2"
        >
         Other videos
        </a>
    </RainbowButton>

    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 text-center">
      click button to view other instagram videos 
    </p>
</div>
                <ShortFormContent />
            </div>
        </main>
    );
}
