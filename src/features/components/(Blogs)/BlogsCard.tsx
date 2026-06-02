"use client";

import { BlogsDetails } from "./BlogsData"
import { FC } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface BlogsCardProps {
  limit?: number;
}

export const BlogsCard: FC<BlogsCardProps> = ({ limit }) => {
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const blogsToShow = limit
    ? BlogsDetails.slice(0, limit)
    : BlogsDetails;

  const handleMouseEnter = (blogLocation: string) => {
    setHoveredBlog(blogLocation);
  };

  const handleMouseLeave = () => {
    setHoveredBlog(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {blogsToShow.map((blog, index) => {
        const isHovered = hoveredBlog === blog.location;
        const isOtherHovered = hoveredBlog !== null && !isHovered;

        return (
          <Link
            key={index}
            href={blog?.location || "#"}
            rel="noopener noreferrer"
            className={`block w-full touch-manipulation active:opacity-75 relative transition-all duration-300 ${
              isOtherHovered ? "blur-sm opacity-50" : ""
            }`}
            style={{
              WebkitTapHighlightColor: "transparent",
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              userSelect: "none",
            }}
            onMouseEnter={() => handleMouseEnter(blog.location || blog.title  )}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {/* Floating Image on Hover */}
            {isHovered && blog.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-58 h-32 pointer-events-none z-50"
                style={{
                  x: mousePos.x + 46,
                  y: mousePos.y - 64,
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md shadow-lg"
                />
              </motion.div>
            )}

            <article className="group/item cursor-pointer touch-manipulation">
              <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100
              hover:text-white/90">
                
                <div className="col-span-12 lg:col-span-8 ">
                  <h2 className="text-xs sm:text-xs md:text-lg leading-7 text-black/80 group-has-hover:hover:text-black dark:text-white/70 dark:group-has-hover:hover:text-white font-medium transition-colors duration-300 font-serif italic">
                    {blog.title}
                  </h2>
                </div>

                <div className="col-span-12 lg:col-span-4 lg:text-right">
                  <div className="flex font-sans lg:justify-end gap-4 text-xs sm:text-xs md:text-xs  text-neutral-500 dark:text-neutral-400 tracking-wide transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
                    <span>{blog.time}</span>
                  </div>
                </div>

              </div>
            </article>
          </Link>
        );
      })}
    </>
  );
};