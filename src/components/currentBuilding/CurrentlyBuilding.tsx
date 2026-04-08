
import Image from "next/image";
import { BuildingDetail } from "./CurrentlyBuildingdata";

const CurrentlyBuilding = () => {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-8">
            <h2 className="text-3xl font-sans text-black dark:text-gray-300 font-bold">Currently Building</h2>
            <h4 className="text-xs text-black/70 dark:text-gray-400 font-mono mb-6">Here is what I was doing </h4>
            <div className="space-y-6">
                {BuildingDetail.map((item) => (
                    <article
                        key={item.buildingName}
                        className="grid gap-6 overflow-hidden rounded-2xl
                         border border-neutral-200 dark:border-neutral-700 bg-gray-200 dark:bg-black/50
                          p-4 shadow-xl md:grid-cols-[320px_1fr] md:p-6"
                    >
                        <div className="relative h-48 w-full overflow-hidden rounded-md h-full  md:min-h-[140px]">
                            <Image
                                src={item.imageUrl ?? "/images/Project/default.webp"}
                                alt={item.buildingName}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 320px"
                            />
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-2xl font-light font-serif italic text-neutral-900 dark:text-white">{item.buildingName}</h3>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs font-medium text-neutral-700">
                                    <span>Progress</span>
                                    <span>{item.progress}%</span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-neutral-400 dark:bg-neutral-700">
                                    <div
                                        className="h-2 rounded-full bg-neutral-900 dark:bg-white/40 transition-all"
                                        style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>

                            <p className="text-xs font-main leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>

                            <a
                                href={item.code}
                                target="_blank"
                                rel="noreferrer"
                                className="w-fit rounded-lg border border-neutral-900 px-4 py-2 text-xs
                                 font-medium text-neutral-900 dark:text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
                            >
                                View Code
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CurrentlyBuilding;