import DiagonalPattern from "@/features/components/LRBorder/Lrborder";
import { setups, CodeSetup } from "@/data/Setup";
import SectionBorder from "@/components/layout/Seprators";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function Home() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-20 relative ">
            <DiagonalPattern side="left" />
            <DiagonalPattern side="right" />
            <div className="items-center flex flex-col justify-center gap-1 mt-10">
                <h2 className="text-4xl font-light font-serif italic ">Coding setup</h2>
                <p className="text-neutral-400 mb-5 font-bold font-main">
                    My mark-1 suit in my cave with box of scraps</p>
            </div>
            <div className="relative w-full h-56 mb-10 border border-gray-400/30 dark:border-white/10  rounded-xl px-5 shadow-lg">
                <Image src="/images/setup/SetupMain.jpg" className="object-cover p-2 rounded-xl" alt="Setup Image" fill />
            </div>
            <SectionBorder className="mt-10" />
            <section className="mt-16 px-5">
                <h2 className="text-3xl font-bold font-sans text-black/80 dark:text-white/80 mb-8">
                    # Hardware
                </h2>

                <div className=" flex flex-col items-start justify-center gap-4 ">
                    {setups.map((item, index) => (
                        <Link
                            href={item.link}
                            target="_blank"
                            key={index}
                            className="group  overflow-hidden transition-all  border-b border-black/20 border-dashed pb-3 dark:border-white/20  duration-300  flex items-center gap-2 w-full"
                        >
                            <div className="relative w-10 rounded-md h-10 border border-black/30 dark:border-white/50">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover  p-1 group-hover:scale-105 rounded-md transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4 flex gap-1 items-end group-hover:underline transition-all duration-300">
                                <h3 className="text-base font-light font-serif italic text-black dark:text-white">
                                    {item.title}
                                </h3>
                                <span className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300"> <GoArrowUpRight /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="mt-16 px-5">
                <h2 className="text-3xl font-bold font-sans text-black/80 dark:text-white/80 mb-8">
                    # Software
                </h2>

                <div className=" flex flex-col items-start justify-center gap-4 ">
                    {CodeSetup.map((item, index) => (
                        <Link
                            href={item.link}
                            target="_blank"
                            key={index}
                            className="group  overflow-hidden transition-all  border-b border-black/20 border-dashed pb-3 dark:border-white/20  duration-300  flex items-center gap-2 w-full"
                        >
                            <div className="relative w-10 rounded-md h-10 border border-black/30 dark:border-white/50">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover  p-1 group-hover:scale-105 rounded-md transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4 flex gap-1 items-end group-hover:underline transition-all duration-300">
                                <h3 className="text-base font-light font-serif italic text-black dark:text-white">
                                    {item.title}
                                </h3>
                                <span className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300"> <GoArrowUpRight /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <div className="items-center flex flex-col justify-center mt-10 group">
                <Link href="/VScode"
                    className="flex justify-center
                border border-black/30 dark:border-white/80
                rounded-md px-4 py-2 shadow-xl
                items-center gap-2 ">
                    <span className="text-black/80 dark:text-white/80 font-main font-semibold group-hover:text-black
                 group-hover:underline transition-all duration-300">VS-code Setup</span>
                    <span className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 "> <GoArrowUpRight /></span>
                </Link></div>
        </div>
    );
}