import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaEnvelope
} from "react-icons/fa6"

import { FaDev, FaMedium } from "react-icons/fa"

export const socialLinks = [
  {
    href: "https://twitter.com/tanishtirpathi",
    icon: FaXTwitter,
    color: " hover:text-black dark:hover:text-white",
    title: "Twitter"
  },
  {
    href: "https://linkedin.com/in/tanishtirpathi",
    icon: FaLinkedin,
    color: "hover:text-blue-500",
    title: "LinkedIn"
  },
  {
    href: "https://github.com/tanishtirpathi",
    icon: FaGithub,
    color: "hover:text-black dark:hover:text-white",
    title: "GitHub"
  },
  {
    href: "https://youtube.com/@tanishtirpathi",
    icon: FaYoutube,
    color: "hover:text-red-500",
    title: "YouTube"
  },
  {
    href: "https://instagram.com/tanish.speaks",
    icon: FaInstagram,
    color: "hover:text-pink-500",
    title: "Instagram"
  },
  {
    href: "https://pinterest.com/tanishtirpathi",
    icon: FaPinterest,
    color: "hover:text-red-600",
    title: "Pinterest"
  },
  {
    href: "mailto:tanishtirpathi0@gmail.com",
    icon: FaEnvelope,
    color: "hover:text-green-400",
    title: "Email"
  },
  {
    href: "https://dev.to/yourusername", // change this
    icon: FaDev,
    color: "hover:text-black dark:hover:text-cyan-400",
    title: "Dev.to"
  },
  {
    href: "https://medium.com/@yourusername", // change this
    icon: FaMedium,
    color: "hover:text-black dark:hover:text-white",
    title: "Medium"
  }
]