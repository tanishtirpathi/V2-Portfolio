"use client";

import { useLiveAge } from "./Useage";

export default function LiveAge() {
  const age = useLiveAge("2006-12-28"); 

  return (
    <span className="text-purple-900 dark:text-purple-400 font-sans font-semibold">
      {age.toFixed(9)} 
    </span>
  );
}