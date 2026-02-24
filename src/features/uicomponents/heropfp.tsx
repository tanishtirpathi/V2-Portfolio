import Image from "next/image";
export default function HeroPfp() {
    return(
          <div className="flex items-center gap-3">
                <Image
                  src="/images/pfp.jpg"
                  alt="Profile Picture"
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-white/40  shadow-xl h-30 "
                />
        
                <div>
                  <span className="flex items-center gap-4">
                    <h1 className="font-serif italic text-4xl">Tanish Tirpathi</h1>
                    <p className="text-gray-500 text-3xl font-bold font-main">- Full stack developer</p>
                  </span>
                  <span className="flex items-center ">
                    <div className="h-2 w-2 bg-green-500 rounded-full">
                    </div><h5 className="text-sm px-1 text-gray-500 font-mono font-semibold">
                      available to work </h5>
                  </span>
                </div>
        
              </div>
    )
}