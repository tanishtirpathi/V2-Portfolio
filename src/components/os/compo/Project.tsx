import Image from "next/image";
import Link from "next/link";
import { IoEarthOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";
import { ProjectDetail } from "@/features/components/Projects/project";

export default function Project() {
	return (
		<section className="h-full w-full text-white">
			<div className="h-full overflow-y-auto border border-white/15 bg-black/70 p-5 backdrop-blur-xl md:p-6">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
						<p className="mt-1 text-sm text-white/60">Minimal view from shared data.</p>
					</div>
					<span className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-xs uppercase tracking-[0.08em] text-white/70 backdrop-blur-md">
						{ProjectDetail.length} total
					</span>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{ProjectDetail.map((project) => {
						const hasLiveLink = !!project.LiveLink && project.LiveLink !== "#";

						return (
						<article
							key={project.location || project.title}
							className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-3 backdrop-blur-lg transition-colors hover:border-white/35"
						>
							<div className="flex items-start gap-3">
								<div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-white/20 bg-white/5">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover "
									/>
								</div>

								<div className="min-w-0 flex-1">
									<div className="flex items-start justify-between gap-2">
										<h3 className="truncate text-base font-medium text-white">{project.title}</h3>
										<div className="flex items-center gap-1.5 text-white/70">
											<a
												href={hasLiveLink ? project.LiveLink : undefined}
												target={hasLiveLink ? "_blank" : undefined}
												rel={hasLiveLink ? "noopener noreferrer" : undefined}
												aria-disabled={!hasLiveLink}
												className={`rounded-md border p-1.5 transition ${
													hasLiveLink
														? "border-white/20 hover:border-white/35 hover:text-white"
														: "pointer-events-none border-white/10 text-white/35"
												}`}
												aria-label={`${project.title} live link`}
											>
												<IoEarthOutline size={15} />
											</a>
											<a
												href={project.GithubLink}
												target="_blank"
												rel="noopener noreferrer"
												className="rounded-md border border-white/20 p-1.5 transition hover:border-white/35 hover:text-white"
												aria-label={`${project.title} GitHub link`}
											>
												<LuGithub size={15} />
											</a>
										</div>
									</div>

									<div className="mt-2 flex items-center gap-2">
										<span
											className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] ${
												project.status === "Completed"
													? "border-white/30 text-white/80"
													: "border-white/20 text-white/60"
											}`}
										>
											<span className="h-1.5 w-1.5 rounded-full bg-current" />
											{project.status}
										</span>
									</div>
								</div>
							</div>

							<p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">{project.description}</p>

							<div className="mt-3 flex flex-wrap gap-1.5">
								{project.type.slice(0, 3).map((type) => (
									<span
										key={type}
										className="rounded border border-white/20 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/60"
									>
										{type}
									</span>
								))}
							</div>

							<div className="mt-4 flex items-center justify-end border-t border-white/10 pt-3">
								<Link
									href={project.location || "/projects"}
									className="inline-flex items-center gap-1 rounded-md border border-white/20 bg-white/[0.03] px-3 py-1.5 text-sm text-white/80 transition hover:border-white/35 hover:bg-white/[0.07] hover:text-white"
								>
									View project
									<HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Link>
							</div>
						</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
