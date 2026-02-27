"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import Link from "next/link";
import clsx from "clsx";

type CoolButtonProps =
  | ({
      href: string;
      variant?: "solid" | "outline";
    } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      href?: undefined;
      variant?: "solid" | "outline";
    } & ButtonHTMLAttributes<HTMLButtonElement>);

export const CoolButton: FC<CoolButtonProps> = ({
  children,
  className,
  variant = "solid",
  href,
  ...props
}) => {
  const baseStyles = clsx(
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
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};