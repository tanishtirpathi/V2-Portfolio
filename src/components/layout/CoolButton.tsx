"use client";

import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface CoolButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CoolButton: FC<CoolButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "focus:ring-neutral-400 dark:focus:ring-neutral-600",

        // Light mode
        "bg-black/80  text-white hover:bg-black",
        // Dark mode
        "dark:bg-white/80 dark:text-black dark:hover:bg-white",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );

};
