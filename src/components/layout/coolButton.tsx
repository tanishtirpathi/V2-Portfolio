"use client";

import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface CoolButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

export const CoolButton: FC<CoolButtonProps> = ({
  children,
  className,
  variant = "solid",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "dark:focus:ring-offset-neutral-900",

        variant === "solid" &&
          `
          bg-neutral-900 text-white
          hover:bg-neutral-800
          dark:bg-neutral-100 dark:text-black
          dark:hover:bg-neutral-200
        `,

        variant === "outline" &&
          `
          border border-neutral-300 text-neutral-800
          hover:bg-neutral-100
          dark:border-neutral-700 dark:text-neutral-200
          dark:hover:bg-neutral-800
        `,

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};