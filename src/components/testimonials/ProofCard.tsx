"use client";
import Image from "next/image";
import { CardDetails } from "./ProofData";

export const ProofCard = () => {
	return (
		<section className="my-12 space-y-6">
			<div>
				<h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
					Client Testimonials
				</h2>
				<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
					What people said after working with me on real projects.
				</p>
			</div>


			<div className="proof-marquee overflow-hidden pb-3">
				<div className="proof-marquee-track flex w-max gap-4">
					{[...CardDetails, ...CardDetails].map((card, index) => {
						const content = (
							<article className="flex h-full min-h-[170px] flex-col justify-between rounded-2xl border 
							border-slate-300/40 bg-slate-100/45 p-4 transition-all duration-200 hover:border-slate-300 
							hover:shadow-md dark:border-zinc-700/20 dark:bg-zinc-900/30 shadow-sm">
								<p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-main">
									{card.description}
								</p>

								<div className="mt-4 flex items-center gap-3">
									<div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-300/80 bg-slate-200 dark:border-zinc-600 dark:bg-zinc-800">
										{card.image ? (
											<Image
												src={card.image} 
												alt={card.name}
												fill
												sizes="36px"
												className="object-cover"
											/>
										) : (
											<div className="grid h-full w-full place-items-center text-sm font-semibold text-slate-700 dark:text-slate-200">
												{card.name.charAt(0)}
											</div>
										)}
									</div>

									<div className="min-w-0">
										<h3 className="truncate text-sm font-main font-bold leading-none text-slate-900 dark:text-white">
											{card.name}
										</h3>
										<p className="truncate pt-0.5 text-xs text-slate-500 dark:text-slate-400">
											{card.role}
											{card.company ? ` ${card.company}` : ""}
										</p>
									</div>
								</div>
							</article>
						);

						if (!card.Link) {
							return (
								<div
									key={`${card.id}-${index}`}
									className="h-full w-[320px] sm:w-[340px] shrink-0"
								>
									{content}
								</div>
							);
						}

						return (
							<a
								key={`${card.id}-${index}`}
								href={card.Link}
								target="_blank"
								rel="noreferrer"
								className="block h-full w-[320px] sm:w-[340px] shrink-0"
							>
								{content}
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProofCard;
