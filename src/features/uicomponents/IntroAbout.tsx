export default function IntroAbout() {
    return (
        <div className="px-2 mt-6 max-w-3xl mb-10">
            <p className="text-black/60 dark:text-gray-400  leading-relaxed text-lg font-sans  ">

                I build full-stack systems with{" "}

                <span className="inline-flex items-center gap-1 rounded italic text-yellow-500 font-serif">
                    <span className="dark:text-white text-black font-light">JavaScript</span>
                </span>{" "}

                &{" "}

                <span className="inline-flex items-center gap-1 rounded  italic text-blue-500 font-serif">
                    <span className="dark:text-white text-black font-light">TypeScript</span>
                </span>{" "}

                — architecting scalable{" "}

                <span className=" dark:text-white text-black font-serif italic font-light">
                    React, Next.js,
                </span>{" "}and
                <span className=" dark:text-white text-black font-serif italic px-1 font-light">
                    Node js
                </span>
                applications that turn complex ideas into production-ready software.

            </p>
            <span className="mt-2 font-sans text-black/60 dark:text-gray-400 font-semibold">
                Mostly powered by strong
                <span className="dark:text-white text-black text-lg font-serif italic px-1  font-light">
                    coffee </span>
                and stubborn
                <span className="dark:text-white text-black text-lg font-serif italic px-1  font-light">
                    ambition </span>
                ☕
            </span>
        </div>
    )
}