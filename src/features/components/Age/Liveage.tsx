"use client";

import { useLiveAge } from "./Useage";

export default function LiveAge() {
  const age = useLiveAge("2006-12-28"); 

  return (
    <span className="text-black/90 dark:text-white/90 font-sans font-semibold">
      {age.toFixed(8)} 
    </span>
  );
}