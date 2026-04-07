import Image from 'next/image'
import { FaGithub, FaQuoteLeft } from 'react-icons/fa'
import { FiFileText, FiSend } from 'react-icons/fi'
import {
	SiBun,
	SiDocker,
	SiExpress,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

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

	const actionButtons = [
		{
			label: 'Resume',
			href: '/Resume',
			external: true,
			icon: <FiFileText className='h-4 w-4' aria-hidden='true' />,
		},
		{
			label: 'Get in touch',
			href: 'https://instagram.com/tanish.tirpathi0',
			external: true,
			icon: <FiSend className='h-4 w-4' aria-hidden='true' />,
		},
	]

	const getSkillIcon = (skill: string) => {
		switch (skill) {
			case 'React':
				return <SiReact className='h-3.5 w-3.5 text-sky-300' />
			case 'Next.js':
				return <SiNextdotjs className='h-3.5 w-3.5 text-white' />
			case 'JavaScript':
				return <SiJavascript className='h-3.5 w-3.5 text-yellow-300' />
			case 'TypeScript':
				return <SiTypescript className='h-3.5 w-3.5 text-blue-300' />
			case 'Tailwind CSS':
				return <SiTailwindcss className='h-3.5 w-3.5 text-cyan-300' />
			case 'Node.js':
				return <SiNodedotjs className='h-3.5 w-3.5 text-lime-300' />
			case 'Bun':
				return <SiBun className='h-3.5 w-3.5 text-amber-200' />
			case 'Express.js':
				return <SiExpress className='h-3.5 w-3.5 text-zinc-200' />
			case 'PostgreSQL':
				return <SiPostgresql className='h-3.5 w-3.5 text-blue-200' />
			case 'MongoDB':
				return <SiMongodb className='h-3.5 w-3.5 text-green-300' />
			case 'Redis':
				return <SiRedis className='h-3.5 w-3.5 text-red-300' />
			case 'Docker':
				return <SiDocker className='h-3.5 w-3.5 text-sky-300' />
			case 'REST API Design':
				return <span className='text-[12px] leading-none text-white/80'>🔗</span>
			case 'WebSockets':
				return <span className='text-[12px] leading-none text-white/80'>🔌</span>
			case 'OAuth 2.0':
				return <span className='text-[12px] leading-none text-white/80'>🛡️</span>
			case 'System Design Basics':
				return <span className='text-[12px] leading-none text-white/80'>🏗️</span>
			case 'Caching Strategies':
				return <span className='text-[12px] leading-none text-white/80'>⚡</span>
			default:
				return <span className='text-[10px] leading-none text-white/70'>●</span>
		}
	}

	return (
		<section className="h-full w-full text-white">
			<div
				className="
				relative h-full overflow-y-auto
				border border-white/15
				bg-black/60 backdrop-blur-xl
				p-5 md:p-8
				"
			>
				<div className='pointer-events-none absolute inset-0'>
					<div className='absolute -left-24 top-24 h-60 w-60 rounded-full bg-red-500/15 blur-3xl' />
					<div className='absolute bottom-8 right-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl' />
				</div>

				<div className='relative z-10'>

					<div className='grid items-center gap-7 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10'>
						<div className='w-full max-w-[170px]'>
							<div className='relative h-36 w-full overflow-hidden rounded-2xl border border-white/20 bg-black/55 shadow-[0_20px_50px_rgba(0,0,0,0.45)]'>
								<Image
									src="/images/pfp.webp"
									alt="Tanish Tirpathi"
									fill
									priority
									className="object-cover"
								/>
								<div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-[11px] font-medium uppercase tracking-[0.08em] text-white/75'>
									Project time
								</div>
							</div>
						</div>

						<div className=''>
							<p className='mb-2 text-xs font-medium uppercase tracking-[0.12em] text-white/60'>
								{title}
							</p>
							<h3 className='max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight '>
								Hi, I am <span className='font-serif italic font-light text-white'>Tanish</span>{' '}
								<span className='text-white/85'>-</span>{' '}
								<span className='italic text-red-500'>A Full Stack Software Engineer.</span>
							</h3>

							<div className='mt-4 max-w-3xl space-y-4 text-base font-sans italic font-light
							 leading-7 text-white/80 md:text-lg md:leading-8'>
								<p>
									I build interactive and modern web apps using technologies like{' '}
									{techHighlights.slice(0, 4).map((item) => (
										<span
											key={item}
											className='ml-1 inline-flex rounded-md border border-cyan-300/35  px-2.5 py-0.5 text-sm font-light text-white font-main'
										>
											{item}
										</span>
									))}
									.


									I focus heavily on{' '}
									<span className='inline-flex rounded-md border border-cyan-300/35  px-2.5 py-0.5 text-sm font-light text-white font-main'>
										{techHighlights[4]}
									</span>{' '}
									and creating smooth, efficient web apps.
								</p>
							</div>

							<div className='mt-6'>
								<div className='mb-3 flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.08em] text-white/90'>
									<span>Core Skills</span>
									<FaGithub className='h-5 w-5 text-white/90' aria-hidden="true" />
								</div>

								<div className='flex flex-wrap gap-2'>
									{skills.map((skill) => (
										<span
											key={skill}
											className='inline-flex items-center rounded-md border border-white/12 bg-white/5 px-3 py-1.5 text-xs
											 font-normal tracking-[0.06em] text-white/85 
											 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:text-sm'
										>
											<span className='mr-1.5 inline-flex items-center justify-center' aria-hidden='true'>
												{getSkillIcon(skill)}
											</span>
											{skill}
										</span>
									))}
								</div>
							</div>
							<div className='mt-7 flex flex-wrap gap-3'>
								{actionButtons.map((btn, idx) => (
									<a
										key={btn.label}
										href={btn.href}
										target={btn.external ? '_blank' : undefined}
										rel={btn.external ? 'noopener noreferrer' : undefined}
										className={`inline-flex items-center gap-2 rounded-md cursor-pointer
											 border px-4 py-2 text-sm font-medium tracking-wide transition-all
											  duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${idx === 0
												? 'border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-white/35 hover:bg-white/15'
												: 'border-white/25 bg-white/12 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/18'
											}`}
									>
										{btn.icon}
										<span>{btn.label}</span>
									</a>
								))}
							</div>
							<div className='mt-6 rounded-xl border border-white/15 bg-gradient-to-br from-white/12 to-white/5 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-5'>
								<div className='flex items-start gap-3'>
									<FaQuoteLeft className='mt-1 h-4 w-4 shrink-0 text-white/55' aria-hidden='true' />
									<blockquote className='space-y-2'>
										<p className='text-sm italic font-main leading-relaxed text-white/90 md:text-base'>
											You have to believe in yourself when no one else does.
										</p>
										<footer className='text-[11px] font-serif italic  tracking-[0.14em] text-white/60 md:text-xs'>
											Bhagavad Gita
										</footer>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
