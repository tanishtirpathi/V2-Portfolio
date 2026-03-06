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
  {
    id: "spotify",
    label: "Spotify",
    icon: "/icons/spotify.jpg",
    component: "Spotify",
  },
  {
    id: "Gallery",
    label: "Gallery",
    icon: "/icons/Gal.jpg",
    component: "Gallery",
  },
  {
    id: "Jarvis",
    label: "Jarvis",
    icon: "/icons/Chat.png",
    component: "ChatBot",
  },
  {
    id: "Google",
    label: "Google",
    icon: "/icons/google.jpg",
    component: "Google",
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: "/icons/terminal.jpg",
    component: "Terminal",
  },

  { divider: true },

  {
    label: "GitHub",
    icon: "/icons/github.jpg",
    url: "https://github.com/tanishtirpathi",
  },
  {
    label: "Youtube",
    icon: "/icons/Youtube.jpg",
    url: "https://www.youtube.com/@tanishtirpathi0",
  },

  { divider: true },

  {
    id: "Trash",
    label: "Trash Bin",
    icon: "/icons/trash.png",
    component: "Soon",
  },
]