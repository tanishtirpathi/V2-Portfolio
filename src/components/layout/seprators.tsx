'use client'
import { cn } from "@/lib/utils"

interface SectionBorderProps {
  className?: string
}

export default function SectionBorder({ className = '' }: SectionBorderProps) {
  return (
    <div className={`border-b border-dashed dark:border-white/20 border-black/50 ${className}`} />
  )
}
