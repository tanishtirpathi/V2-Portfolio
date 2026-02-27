import Link from "next/link"
import Image from "next/image";
export const PersonalStuff = () => {
    return (
        <section className="my-20">

            <div className="flex flex-col">
                <h2 className="text-3xl font-sans text-black/90 dark:text-gray-300 font-bold">Personal Stuff</h2>
                <p className="text-xs text-gray-700 dark:text-gray-400 font-mono "> some things which other than work</p>
            </div>



            <div className="shadow-lg rounded-md bg-gray-100 dark:bg-black/10 px-1">
                <Link href="/movies">
                    <div className="w-full px-4 py-2 bg-gray-100 
                               dark:bg-white/10 rounded-lg 
                                mt-4 flex items-center gap-4 
                                shadow-lg hover:bg-gray-200 
                                dark:hover:bg-white/20 transition-all  
                                duration-300 cursor-pointer hover:-translate-y-1 ">

                        <Image src="/MOV.jpg" className="rounded-md" alt="Personal stuff image" width={40} height={40} />
                        <div>
                            <h3 className="text-lg font-semibold font-sans ">Movies</h3>
                            <h4 className="text-sm font-main text-gray-600 dark:text-gray-400">Things that inspire me over the period of time</h4>
                        </div>

                    </div></Link>
            </div>
            <div className="shadow-lg rounded-md bg-gray-100 dark:bg-black/10 px-1">
                <div className="w-full px-4 py-2 bg-gray-100 
                                dark:bg-white/10 rounded-lg 
                                mt-4 flex items-center gap-4 
                                shadow-lg hover:bg-gray-200 
                                dark:hover:bg-white/20 transition-all  
                                duration-300 cursor-pointer hover:-translate-y-1 ">

                    <Image src="/COD.jpg" className="rounded-md" alt="Personal stuff image" width={40} height={40} />
                    <div>
                        <h3 className="text-lg font-semibold font-sans ">Coding Setup</h3>
                        <h4 className="text-sm font-main text-gray-600 dark:text-gray-400">My current development environment</h4>
                    </div>

                </div>
            </div>
            <div className="shadow-lg rounded-md bg-gray-100 dark:bg-black/10 px-1">
                <Link href="/VSCode">
                    <div className="w-full px-4 py-2 bg-gray-100 
                               dark:bg-white/10 rounded-lg 
                                mt-4 flex items-center gap-4 
                                shadow-lg hover:bg-gray-200 
                                dark:hover:bg-white/20 transition-all  
                                duration-300 cursor-pointer hover:-translate-y-1 ">

                        <Image src="/Code.jpg" className="rounded-md" alt="Personal stuff image" width={40} height={40} />
                        <div>
                            <h3 className="text-lg font-semibold font-sans ">VS-code Extensions</h3>
                            <h4 className="text-sm font-main text-gray-600 
                            dark:text-gray-400">Some of My Productivtiy tools</h4>
                        </div>

                    </div></Link>
            </div>

        </section>
    )
}