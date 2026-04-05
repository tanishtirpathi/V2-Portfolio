type SoonProps = {
	title?: string
	subtitle?: string
}

export default function Soon({
	title = "This app is under development",
	subtitle = "It will be available soon.",
}: SoonProps) {
	return (
		<section className="h-full w-full p-6 md:p-8 text-white">
			<div
				className="
				h-full rounded-2xl
				border border-white/20
				bg-black/35 backdrop-blur-xl
				p-6 md:p-8
				flex flex-col justify-center
				"
			>
				<h2 className="text-2xl md:text-3xl font-serif italic">{title}</h2>
				<p className="mt-3 text-sm md:text-base text-white/85 max-w-xl">{subtitle}</p>
			</div>
		</section>
	)
}
