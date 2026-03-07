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
    icon: "/icons/skills.jpg",
    component: "SkillsShowcase",
  },
  {
    id: "Projects",
    label: "Projects",
    icon: "/icons/Project.jpg",
    component: "Projects",
  },
  {
    id: "Blogs",
    label: "Blogs",
    icon: "/icons/Notes.png",
    component: "Blogs",
  },

  { divider: true },

  {
    label: "GitHub",
    icon: "/icons/github.jpg",
    url: "https://github.com/tanishtirpathi",
  },
]