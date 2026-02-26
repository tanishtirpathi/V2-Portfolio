import Image from "next/image"
export const ExperienceCard = ({
    image,
    title,
    company,
    startDate,
    description,
    Technologies,
}: {
    image: string
    title: string
    company: string
    startDate: string
    description: string
    Technologies: string[]
}) => {
    return (
        <div className="group relative mb-10 border-b border-gray-300 dark:border-gray-600 pb-3 mx-2 pb-10">

            {/* Header */}
            <div className="flex justify-between items-start mb-3 ">
                <div className="flex items-center justify-center">
                    <Image src={image} alt="Experience Image" width={40} height={40} className="rounded-md mr-3" />
                    <div>
                        <h3 className="text-base font-serif font-light text-black/80 dark:text-white 
                        group-hover:text-black transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-700 font-main font-light dark:text-gray-400">{company}</p>
                    </div></div>
                <span className="text-xs text-gray-500 px-3 py-1 rounded-full">
                    {startDate}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-black/60 dark:text-gray-400 font-sans leading-relaxed mb-4">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {Technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs font-sans
                         bg-black/10 dark:bg-white/5 text-black dark:text-white border border-dashed border-black/30 dark:border-white/40 px-3 py-1 rounded-md 
                         hover:bg-purple-500/20 transition-all duration-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}