"use client"

import { GitHubCalendar } from "react-github-calendar"

export default function GithubActivity() {
  return (
    <section className="w-full py-6 bg-black text-white mt-20 mb-20 ">
      <h2 className="text-2xl font-bold font-sans text-gray-300">GitHub Activity</h2>
      <p className="text-gray-400 mb-4 font-mono text-xs">I know it's useless but </p>

      <div className="overflow-x-auto border border-white/10 px-4 rounded-md py-2 ">
        {/* Hover wrapper */}
        <div className="relative inline-block group">
          <a
            href="https://github.com/tanishtirpathi"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <GitHubCalendar
              username="tanishtirpathi"
              blockSize={9}
              blockMargin={3}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: ["#1f2937", "#374151", "#6b7280", "#9ca3af", "#ffffff"],
              }}
            />
          </a>
        </div>
       
      </div>
    </section>
  )
}