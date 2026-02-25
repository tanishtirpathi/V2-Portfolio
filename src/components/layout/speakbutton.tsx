"use client";
import { IoVolumeHigh } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function SpeakNameButton() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakName = () => {
    if (typeof window === "undefined") return;
    
const utterance = new SpeechSynthesisUtterance("तनिष त्रिपाठी");
    // Hindi voice find karo
    const hindiVoice = voices.find((voice) =>
      voice.lang === "hi-IN"
    );

    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }

    utterance.lang = "hi-IN";
    utterance.rate = 0.9;   // thoda natural
    utterance.pitch = 1;    // natural pitch

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speakName}
      className="px-3 text-3xl text-black/80 dark:text-white/50 hover:opacity-80 transition cursor-pointer"
    >
      <IoVolumeHigh />
    </button>
  );
}