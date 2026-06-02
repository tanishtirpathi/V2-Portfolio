"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCommit, ExternalLink, Github as GithubIcon } from "lucide-react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const skeleton = (
    <div className="w-full h-[180px] bg-black/5 dark:bg-white/5 animate-pulse rounded-xl border border-black/10 dark:border-white/10" />
  );

  return (
    <section className="w-full py-10 mt-10 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
               <GithubIcon className="w-5 h-5 text-black/80 dark:text-white/80" />
               <h2 className="text-2xl font-bold font-sans text-black dark:text-gray-100">
                GitHub Activity
              </h2>
            </div>
            <p className="text-black/50 dark:text-gray-400 font-mono text-xs italic">
              proof of work, block by block
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!loading && data && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-black/40 dark:text-white/40">Latest</span>
                </div>
                
                <a
                  href={data.repo.url}
                  target="_blank"
                  className="group flex items-center gap-2 text-xs font-medium text-purple-900 dark:text-purple-300 hover:underline underline-offset-4"
                >
                  <GitCommit className="w-3 h-3" />
                  <span className="truncate max-w-[150px] sm:max-w-[250px]">{data.commit.message}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative group">
          {/* Subtle decorative glow */}
          <div className="absolute -inset-0.5
          opacity-0 transition duration-500" />
          
          <div className="relative overflow-x-auto p-6 bg-transparent  
          ">
            {loading ? skeleton : (
              <a
                href="https://github.com/tanishtirpathi"
                target="_blank"
                rel="noopener noreferrer"
                className="block min-w-max"
              >
                {/* 🌞 Light Mode Calendar */}
                <div className="block dark:hidden">
                  <GitHubCalendar
                    username="tanishtirpathi"
                    blockSize={7}
                    blockMargin={3}
                    fontSize={10}
                    colorScheme="light"
                    theme={{
                      light: ["#e5e7eb", "#d6ced5", "#b39bae", "#70576e", "#4f3751"],
                    }}
                  />
                </div>

                {/* 🌙 Dark Mode Calendar */}
                <div className="hidden dark:block">
                  <GitHubCalendar
                    username="tanishtirpathi"
                    blockSize={7}
                    blockMargin={3}
                    fontSize={10}
                    colorScheme="dark"
                    theme={{
                      dark: ["#1c1c21", "#4c4863", "#565464", "#6b6b80", "#c5c4d6"],
                    }}
                  />
                </div>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
