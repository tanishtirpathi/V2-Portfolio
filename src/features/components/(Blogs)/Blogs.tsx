//import { CoolButton } from "@/components/layout/coolButton";
//import Link from "next/link";
import { BlogsCard } from "./BlogsCard";
export default function BlogShow() {
  return (
    <div className="my-15">
      <h2 className="text-3xl font-sans text-black dark:text-gray-300 font-bold">Blogs</h2>
      <h4 className="text-xs text-black/70 dark:text-gray-400 font-mono mb-6">Here are some of my recent blogs </h4>
      <div className="px-5"><BlogsCard limit={3} />
      </div>

      <div className="mt-6 flex justify-center ">
        <span className=" flex items-center justify-center rounded-lg">
          <span className="border border-gray-500/30 bg-[ #d5d9df] 
          dark:bg-black/80 px-4 py-2 rounded-lg
         hover:bg-gray-400/70 dark:hover:bg-white/5 shadow-xl cursor-pointer 
         transition duration-300 ease-in-out">
            <a href="./blogs" target="_blank" rel="noopener noreferrer"
              className=" font-main text-sm font-semibold flex items-center "
            >View My Philosophy
            </a></span>
        </span>
      </div>
    </div>
  );
}