export default function IntroAbout() {
    return (
        <div className="px-2 mt-6 max-w-3xl mb-10">
            <p className="text-gray-400 leading-relaxed text-lg font-sans font-semibold ">

                I build full-stack systems with{" "}

                <span className="inline-flex items-center gap-1 rounded italic text-yellow-500 font-serif">
                    <span className="text-white font-light">JavaScript</span>
                </span>{" "}

                &{" "}

                <span className="inline-flex items-center gap-1 rounded  italic text-blue-500 font-serif">
                    <span className="text-white font-light">TypeScript</span>
                </span>{" "}

                — architecting scalable{" "}

                <span className=" text-white font-serif italic font-light">
                    React, Next.js,
                </span>{" "}and
                <span className=" text-white font-serif italic px-1 font-light">
                    Node js
                </span>
                applications that turn complex ideas into production-ready software.

            </p>
            <span className="mt-2 font-sans text-gray-400 font-semibold">
                Mostly powered by strong <span className="text-white font-serif italic pr-1  font-light">coffee </span>
                and stubborn <span className="text-white font-serif italic pr-1  font-light">ambition </span> ☕</span>
        </div>
    )
}