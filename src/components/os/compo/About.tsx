type AboutProps = {
	title?: string
}

export default function About({ title = "About Me" }: AboutProps) {
	return (
		<section className="h-full w-full p-4 md:p-6 text-white">
			<div
				className="
				relative h-full overflow-hidden rounded-2xl
				border border-white/20
				bg-gradient-to-br from-slate-900/85 via-black/80 to-cyan-950/80
				backdrop-blur-2xl
				p-5 md:p-7
				"
			>
				<div className="absolute -top-20 -right-12 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
				<div className="relative z-10 h-full flex flex-col">
					<span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/85">
						Portfolio OS
					</span>

					<h2 className="mt-5 text-3xl md:text-4xl font-serif italic leading-tight">{title}</h2>
					<p className="mt-3 max-w-2xl text-sm md:text-base text-white/85">
						Hey, I am Tanish. This OS page is my interactive personal space where each dock app opens a focused window.
						I build products with strong UI, practical engineering, and playful details.
					</p>

					<div className="mt-6 grid gap-3 md:grid-cols-3">
						<article className="rounded-xl border border-white/15 bg-white/10 p-4">
							<p className="text-xs uppercase tracking-[0.15em] text-cyan-100/90">Focus</p>
							<p className="mt-2 text-sm text-white/90">Frontend engineering, app experiences, and creator tooling.</p>
						</article>

						<article className="rounded-xl border border-white/15 bg-white/10 p-4">
							<p className="text-xs uppercase tracking-[0.15em] text-cyan-100/90">Currently</p>
							<p className="mt-2 text-sm text-white/90">Improving this OS mode and adding real app content windows.</p>
						</article>

						<article className="rounded-xl border border-white/15 bg-white/10 p-4">
							<p className="text-xs uppercase tracking-[0.15em] text-cyan-100/90">Vibe</p>
							<p className="mt-2 text-sm text-white/90">Minimal, cinematic, and interaction-first design system.</p>
						</article>
					</div>

					<p className="mt-auto pt-5 text-xs md:text-sm text-white/70">Open other icons in the dock to explore more sections.</p>
				</div>
			</div>
		</section>
	)
}
