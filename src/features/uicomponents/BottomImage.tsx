"use client";
import Image from "next/image";

export default function BottomImage() {
  return (
    <div className="relative w-full h-[300px] my-10">
      <a href="https://instagram.com/tanish.tirpathi0" target="_blank">    <Image
        src="/images/Blog/Iam2.webp"
        alt="Background banner"
        fill
        className="object-cover rounded-md shadow-xl"
        priority
      /></a>

    </div>
  );
}