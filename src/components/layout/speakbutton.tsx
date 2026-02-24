"use client";
import { IoVolumeHigh } from "react-icons/io5";

export default function SpeakNameButton() {

  const speakName = () => {
    if (typeof window === "undefined") return;

    const utterance = new SpeechSynthesisUtterance("Tanish Tirpathi");

    utterance.lang = "en-US";      // language
    utterance.rate = 1;            // speed (0.5 - 2)
    utterance.pitch = 1;           // voice tone

    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speakName}
      className="px-3 text-3xl text-white/50 hover:opacity-80 transition"
    >
      <IoVolumeHigh />

    </button>
  );
}