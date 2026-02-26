import DiagonalPattern from "@/features/components/LRBorder/lrborder";
import { BlogsCard } from "@/features/components/(Blogs)/BlogsCard";
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 relative ">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />
      <div className="items-center flex flex-col justify-center gap-1 px-10">
        <h2 className="text-4xl font-light font-serif italic ">My Philosophy:[Blogs]</h2>
        <p className="text-neutral-400 mb-10">
          some inner thoughts that cannot stay inside me </p>
      </div>
      <BlogsCard />
    </div>
  );
}