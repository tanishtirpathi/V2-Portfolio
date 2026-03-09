"use client"
import { useState, useEffect } from "react"
import { PiNotepadLight } from "react-icons/pi"
import {  FiX } from "react-icons/fi"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { SiAirplayvideo } from "react-icons/si";
import Link  from "next/link"

export default function ConnectButtons() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showModal])

    return (
        <>
            <div className="flex py-4 items-center gap-6">
                <RainbowButton variant="outline">
                    <Link
                        href="/Resume"
                        className="font-main font-semibold flex items-center gap-2"
                    >
                        Resume/CV <PiNotepadLight />
                    </Link>
                </RainbowButton>

                <RainbowButton
                    onClick={() => setShowModal(true)}
                    className="font-main font-semibold flex items-center gap-2"
                >
                    Video Intro <SiAirplayvideo />
                </RainbowButton>
            </div>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-in fade-in duration-300">

                    <div className="relative w-[90%] max-w-4xl rounded-2xl
                          overflow-hidden shadow-2xl bg-black/80 border 
                          dark:bg-white/5 border-white/10 animate-in zoom-in-95 duration-300 px-15 py-5">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
                        >
                            <FiX size={20} />
                        </button>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src="https://www.youtube-nocookie.com/embed/LCwrRLJFqM4?rel=0&modestbranding=1"
                            title="Introduction video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        /></div>
                </div>
            )}
        </>
    )
}