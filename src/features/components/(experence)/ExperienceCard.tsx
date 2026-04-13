"use client"

import { useState } from "react"
import { motion } from "framer-motion"
export const ExperienceCard = ({
    title,
    company,
    startDate,
    description,
    Technologies,
}: {
    title: string
    company: string
    startDate: string
    description: string
    Technologies: string[]
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group relative mb-10 pb-3 mx-2 pb-1 "
        >

            {/* Header */}
            <div className="flex justify-between items-start mb-3 ">
                <div className="flex items-center justify-center">
                    <div>
                        <h3 className="text-base font-main font-bold text-black/80 dark:text-white 
                        group-hover:text-black transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-700 font-main font-light dark:text-gray-400">{company}</p>
                    </div></div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 px-3 py-1 rounded-full">
                        {startDate}
                    </span>
                    <button
                        type="button"
                        aria-label={isOpen ? "Collapse details" : "Expand details"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="h-8 w-8 rounded-md text-black/70 dark:text-white/80 hover:bg-black/5 hover:dark:bg-white/10 transition-colors duration-200 flex items-center justify-center"
                    >
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-xl leading-none"
                        >
                            ▾
                        </motion.span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <>
                    {/* Description */}
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-black/60 dark:text-gray-400 font-sans leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2  border-b border-gray-300 dark:border-gray-600 pb-7">
                        {Technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs font-sans
                         bg-black/10 dark:bg-white/5 
                         text-black dark:text-white border border-dashed 
                         border-black/30 dark:border-white/40 px-3 py-1 rounded-md 
                         hover:bg-purple-500/20 transition-all duration-200 hover:dark:bg-pink-200/40 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    )
}