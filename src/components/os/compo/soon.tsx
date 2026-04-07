type SoonProps = {
	title?: string
	subtitle?: string
}

export default function Soon({
	title = "This app is under development",
	subtitle = "It will be available soon.",
}: SoonProps) {
	return (
		<section className="h-full w-full  text-white">
			<div
				className="
				relative h-full overflow-hidden
				border border-white/20
				bg-black/10 backdrop-blur-2xl
                text-center
                flex flex-col items-center justify-center
				"
			>
				<h1 className="font-main font-semibold text-3xl md:text-5xl">{title}</h1>
				<p className="mt-4 text-white/80 text-sm md:text-base max-w-xl px-6">{subtitle}</p>
			</div>
		</section>
	)
}
