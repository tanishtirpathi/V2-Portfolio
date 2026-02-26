'use client'

interface DiagonalPatternProps {
  side: 'left' | 'right'
  className?: string
  topOffset?: string
}

export default function DiagonalPattern({ side, className = '', topOffset = '0' }: DiagonalPatternProps) {
  return (
    <div className={`absolute ${side}-0 mx-[-70px] w-[60px] h-full overflow-hidden sm:block md:block hidden lg:block 
    ${className}`} style={{ top: topOffset }}>
      <div 
        className="absolute dark:opacity-[0.04] opacity-[0.09] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/80"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)'
        }}
      />
    </div>
  )
}
