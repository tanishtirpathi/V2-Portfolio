export type DockApp = {
  id?: string
  label?: string
  icon?: string
  component?: string
  url?: string
  divider?: boolean
}

export const dockApps: DockApp[] = [
  {
    id: "About Me",
    label: "About Me",
    icon: "/OS/icon/skills.webp",
    component: "about",
  },
  {
    id: "Projects",
    label: "Projects",
    icon: "/OS/icon/Project.webp",
    component: "projects",
  },
  {
    id: "Blogs",
    label: "Blogs",
    icon: "/OS/icon/Notes.webp",
    component: "blogs",
  },

  { divider: true },

  {
    label: "GitHub",
    icon: "/OS/icon/github.webp",
    url: "https://github.com/tanishtirpathi",
  },
   {
    label: "LinkedIn",
    icon: "/OS/icon/linkedin.webp",
    url: "https://linkedin.com/in/tanishtirpathi",
  },
     {
    label: "Chess",
    icon: "/OS/icon/chess.webp",
    url: "https://www.chess.com/member/tanishtirpathi",
  },
    {
    label: "Instagram",
    icon: "/OS/icon/Instagram.webp",
    url: "https://instagram.com/tanish.tirpathi",
  },
   {
    label: "twitter",
    icon: "/OS/icon/X.webp",
    url: "https://x.com/tanishtirpathi",
  },
]