import Link from 'next/link'
import { BlogsDetails } from '@/features/components/(Blogs)/BlogsData'

export default function Blogs() {
	return (
		<section className='h-full w-full text-white'>
			<div className='h-full overflow-y-auto  border border-white/15 bg-black/70 p-5 backdrop-blur-md md:p-6'>
			<div className='flex flex-col items-center justify-center '>	<h2 className='mb-1 text-3xl font-serif italic  tracking-tight'>Blogs</h2>
				<p className='mb-6 text-sm text-white/70'>A simple list of my latest writings.</p></div>

				<ul className='space-y-3'>
					{BlogsDetails.map((blog) => (
						<li key={blog.title}>
							<Link
								href={blog.location ?? '/blog'}
                                target="_blank"
								className='flex items-center text-white/50 hover:text-white rounded-md gap-4 justify-between border-b  border-white/10  p-4 transition-colors hover:border-white/30 hover:bg-white/10'
							>
								<h3 className='text-lg font-light font-serif italic '>{blog.title}</h3>
								<p className='mt-2 text-xs uppercase tracking-[0.08em] text-white/65'>{blog.time}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
