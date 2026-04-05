import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

type AboutProps = {
	title?: string
}

export default function About({ title = 'About Me' }: AboutProps) {
	const techHighlights = [
		'React',
		'TypeScript',
		'JavaScript',
		'Next.js',
		'UI design',
	]

	const skills = [
		'React',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'Tailwind CSS',
		'Node.js',
		'Bun',
		'Express.js',
		'REST API Design',
		'WebSockets',
		'PostgreSQL',
		'MongoDB',
		'Redis',
		'OAuth 2.0',
		'Docker',
		'System Design Basics',
		'Caching Strategies',
	]

	return (
		<section className="h-full w-full text-white">
			<div
				className="
				relative h-full overflow-y-auto
				border border-white/20
				bg-black/65 backdrop-blur-md
				p-5 md:p-7
				"
			>
				<div className='pointer-events-none absolute inset-0'>
					<div className='absolute -left-24 top-24 h-60 w-60 rounded-full bg-red-500/20 blur-3xl' />
					<div className='absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl' />
				</div>

				<div className='relative z-10'>

					<div className='grid items-center gap-6 md:grid-cols-[170px_minmax(0,1fr)] md:gap-8'>
						<div className='w-full max-w-[170px]'>
							<div className='relative h-36 w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl'>
								<Image
									src="/images/pfp.webp"
									alt="Tanish Tirpathi"
									fill
									priority
									className="object-cover"
								/>
								<div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-[11px] text-white/80'>
									Project time
								</div>
							</div>
						</div>

						<div className='space-y-6'>
							<h2 className='max-w-xl text-xl font-extrabold leading-tight md:text-6xl'>
								Hi, I&apos;m <span className='font-serif italic font-medium text-white'>Tanish</span>{' '}
								<span className='text-white/85'>-</span>{' '}
								<span className='italic text-red-500'>A Full Stack Software Engineer.</span>
							</h2>

							<div className='max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 md:text-3xl'>
								<p>
									I build interactive and modern web apps using technologies like{' '}
									{techHighlights.slice(0, 4).map((item) => (
										<span
											key={item}
											className='mx-1 inline-flex rounded-lg border border-cyan-300/40 bg-black/45 px-2.5 py-1 text-base font-semibold text-white'
										>
											{item}
										</span>
									))}
									.
								</p>
								<p>
									I focus heavily on{' '}
									<span className='inline-flex rounded-lg border border-cyan-300/40 bg-black/45 px-2.5 py-1 text-base font-semibold text-white'>
										{techHighlights[4]}
									</span>{' '}
									and creating smooth efficient webapps.
								</p>
							</div>

							<div>
								<div className='mb-3 flex items-center gap-2 text-xl font-semibold text-white/95'>
									<span>Core Skills</span>
									<FaGithub className='h-5 w-5 text-white/90' aria-hidden="true" />
								</div>

								<div className='flex flex-wrap gap-2.5'>
									{skills.map((skill) => (
										<span
											key={skill}
											className='rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
