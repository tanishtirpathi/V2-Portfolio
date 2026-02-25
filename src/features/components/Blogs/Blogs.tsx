//import { CoolButton } from "@/components/layout/coolButton";
import { BlogsCard } from "./BlogsCard";
import { ShimmerButton } from "@/components/ui/shimmer-button"
export default function BlogShow() {
  return (
    <div className="my-15">
      <h2 className="text-3xl font-sans text-black dark:text-gray-300 font-bold">Blogs</h2>
      <h4 className="text-xs text-black/70 dark:text-gray-400 font-mono mb-6">Here are some of my recent blogs </h4>
      <div className="px-5"><BlogsCard limit={3} />
      </div>

      <div className="mt-6 flex justify-center ">
        <ShimmerButton>
          <a href="https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub" target="_blank" rel="noopener noreferrer"
            className=" font-main text-sm font-semibold flex items-center "
          >View All Blogs
          </a></ShimmerButton>
      </div>
    </div>
  );
}