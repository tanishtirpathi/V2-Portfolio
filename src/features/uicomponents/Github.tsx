"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react";

interface GitHubData {
  repo: {
    url: string;
    name: string;
  };
  commit: {
    message: string;
    date: string;
  };
}


export default function GithubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then(setData);
  }, []);
  if (!data) return <p className="font-main font-bold text-black/60 dark:text-white/50 text-sm">Loading...</p>;

  return (
    <section className="w-full py-6 mt-20 mb-20">
      <div className="flex items-end gap-2 justify-between ">
        <div> <h2 className="text-2xl font-bold font-sans text-black dark:text-gray-300">
          GitHub Activity
        </h2>

          <p className="text-black/70 dark:text-gray-400 mb-4 font-mono text-xs">
            I know this is useless but
          </p>
        </div>


        <div className="flex flex items-center justify-center gap-x-1"> 
          <p className=" text-xs sm:text-xs md:text-xs lg:text-sm text-black/50 font-bold dark:text-white/40 mb-1">
            Last commit was : 
          </p>
          <a
            href={data.repo.url}
            target="_blank"
            className="text-purple-900 font-semibold  text-xs dark:text-purple-200/50"
          >
           {data.commit.message}
          </a>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#fdfbfb] dark:bg-[#18181b] border border-black/10 dark:border-white/10 px-4 rounded-md py-2">

        <a
          href="https://github.com/tanishtirpathi"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* 🌞 Light Mode Calendar */}
          <div className="block dark:hidden">
            <GitHubCalendar
              username="tanishtirpathi"
              blockSize={8}
              blockMargin={3}
              fontSize={14}
              colorScheme="light"
              theme={{
                light: [
                  "#d6ced5",
                  "#b39bae",
                  "#685966",
                  "#70576e",
                  "#4f3751",
                ],
              }}
            />
          </div>

          {/* 🌙 Dark Mode Calendar */}
          <div className="hidden dark:block">
            <GitHubCalendar
              username="tanishtirpathi"
              blockSize={8}
              blockMargin={3}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: [
                  "#171622",
                  "#4c4863",
                  "#565464",
                  "#6b6b80",
                  "#c5c4d6",
                ],
              }}
            />
          </div>

        </a>

      </div>
    </section>
  )
}
