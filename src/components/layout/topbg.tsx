"use client";
import Image from "next/image";

export default function TopBg() {
  return (
    <div className="relative w-full h-[200px] ">
      <Image
        src="/images/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover  shadow-xl"
      />
    </div>
  );
}