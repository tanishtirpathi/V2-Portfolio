import { MenuSection } from "@/components/os/types/menu"

export const menuData: MenuSection[] = [
  {
    title: "File",
    items: [
      { label: "New Folder" },
      { label: "New Finder Window" },
      { label: "New Tab" },
      { label: "Open" },
      { separator: true },
      { label: "Get Info" },
      { label: "Rename" },
      { separator: true },
      { label: "Duplicate" },
    ],
  },
  {
    title: "Edit",
    items: [
      { label: "Undo" },
      { label: "Redo" },
      { separator: true },
      { label: "Cut" },
      { label: "Copy" },
      { label: "Paste" },
      { label: "Select All" },
      { separator: true },
      { label: "Find" },
    ],
  },
  {
    title: "View",
    items: [
      { label: "as Icons ⌘1" },
      { label: "as List ⌘2" },
      { label: "as Columns ⌘3" },
      { label: "as Gallery ⌘4" },
      { separator: true },
      { label: "Clean Up" },
      { label: "Clean Up By ▸" },
      { separator: true },
      { label: "Enter Full Screen ⌃⌘F" },
    ],
  },
]