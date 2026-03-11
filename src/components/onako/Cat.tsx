"use client"

import { useEffect } from "react";
import { catConfig } from "./billiesConfig";

export default function OnekoCat() {
  useEffect(() => {
    if (!catConfig.enabled) return;

    if (document.querySelector('script[src="/oneko/oneko.js"]')) return;

    const script = document.createElement("script");
    script.src = "/oneko/oneko.js";
    script.setAttribute("data-cat", "/oneko/oneko.gif");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  if (!catConfig.enabled) return null;

  return null;
}