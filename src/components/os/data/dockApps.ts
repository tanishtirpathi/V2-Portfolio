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
    icon: "/OS/icon/skills.jpg",
    component: "SkillsShowcase",
  },
  {
    id: "Projects",
    label: "Projects",
    icon: "/OS/icon/Project.webp",
    component: "Projects",
  },
  {
    id: "Blogs",
    label: "Blogs",
    icon: "/OS/icon/Notes.webp",
    component: "Blogs",
  },

  { divider: true },

  {
    label: "GitHub",
    icon: "/OS/icon/github.jpg",
    url: "https://github.com/tanishtirpathi",
  },
   {
    label: "LinkedIn",
    icon: "/OS/icon/linkedin.jpg",
    url: "https://linkedin.com/in/tanishtirpathi",
  },
    {
    label: "Instagram",
    icon: "/OS/icon/Instagram.jpg",
    url: "https://instagram.com/tanish.tirpathi",
  },
   {
    label: "twitter",
    icon: "/OS/icon/X.jpg",
    url: "https://x.com/tanishtirpathi",
  },
]