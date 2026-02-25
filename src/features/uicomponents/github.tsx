"use client"

import { GitHubCalendar } from "react-github-calendar"

export default function GithubActivity() {
  return (
    <section className="w-full py-6 mt-20 mb-20">
      <h2 className="text-2xl font-bold font-sans text-black dark:text-gray-300">
        GitHub Activity
      </h2>

      <p className="text-black/70 dark:text-gray-400 mb-4 font-mono text-xs">
        I know this is useless but
      </p>

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
              blockSize={9}
              blockMargin={3}
              fontSize={14}
              colorScheme="light"
              theme={{
                light: [
                  "#f0ebef",
                  "#dbd1d9",
                  "#af9cad",
                  "#806b7e",
                  "#4f3751",
                ],
              }}
            />
          </div>

          {/* 🌙 Dark Mode Calendar */}
          <div className="hidden dark:block">
            <GitHubCalendar
              username="tanishtirpathi"
              blockSize={9}
              blockMargin={3}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: [
                  "#171622",
                  "#231f37",
                  "#3a3751",
                  "#6b6b80",
                  "#9d9caf",
                ],
              }}
            />
          </div>

        </a>

      </div>
    </section>
  )
}