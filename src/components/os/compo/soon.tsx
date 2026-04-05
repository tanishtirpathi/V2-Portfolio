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
				<h1 className="font-main font-semibold text-5xl">Adding soon</h1>
			</div>
		</section>
	)
}
