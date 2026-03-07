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
    icon: "/OS/icon/Blogs.webp",
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
    icon: "/OS/icon/github.webp",
    url: "https://github.com/tanishtirpathi",
  },
   {
    label: "twitter",
    icon: "/OS/icon/x.jpg",
    url: "https://x.com/tanishtirpathi",
  },
]