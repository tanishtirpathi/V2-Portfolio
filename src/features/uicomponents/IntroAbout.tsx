export default function IntroAbout() {
    return (
        <div className="px-2 mt-6 max-w-3xl">
            <p className="text-gray-400 leading-relaxed text-lg font-main ">

                I build full-stack systems with{" "}

                <span className="inline-flex items-center gap-1 rounded italic text-yellow-500 font-serif">
                    <span className="text-white">JavaScript</span>
                </span>{" "}

                &{" "}

                <span className="inline-flex items-center gap-1 rounded  italic text-blue-500 font-serif">
                    <span className="text-white">TypeScript</span>
                </span>{" "}

                — architecting scalable{" "}

                <span className=" text-white font-serif italic">
                    React, Next.js,
                </span>{" "}and
                <span className=" text-white font-serif italic px-1">
                    Node js
                </span>
                applications that turn complex ideas into production-ready software.

            </p>
            <span className="mt-2 font-main text-gray-400">
                Mostly powered by strong <span className="text-white font-serif italic pr-1">coffee </span>
                and stubborn ambition ☕</span>
        </div>
    )
}