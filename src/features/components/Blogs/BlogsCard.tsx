import Image from "next/image";
import { BlogsDetails } from "./BlogsData"
import { FC } from "react";
interface BlogsCardProps {
  limit?: number;
}

export const BlogsCard: FC<BlogsCardProps> = ({ limit }) => {
  const blogsToShow = limit
    ? BlogsDetails.slice(0, limit)
    : BlogsDetails;

  return (
    <>
      {blogsToShow.map((blog, index) => (
        <a
          key={index}
          href={blog.location}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full touch-manipulation active:opacity-75"
          style={{
            WebkitTapHighlightColor: "transparent",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          <article className="group/item cursor-pointer touch-manipulation">
            <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100
            hover: text-white/90">
              
              <div className="col-span-12 lg:col-span-8 ">
                <h2 className="text-base leading-7 text-black/80 group-has-hover:hover:text-black dark:text-white/70 dark:group-has-hover:hover:text-white font-medium transition-colors duration-300 font-serif italic">
                  {blog.title}
                </h2>
              </div>

              <div className="col-span-12 lg:col-span-4 lg:text-right">
                <div className="flex font-sans lg:justify-end gap-4 text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
                  <span>{blog.time}</span>
                </div>
              </div>

            </div>
          </article>
        </a>
      ))}
    </>
  );
};