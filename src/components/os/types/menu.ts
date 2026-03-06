export type MenuItem =
  | {
      label: string
      shortcut?: string
      action?: string
    }
  | { separator: true }

  
  export type MenuSection = {
    title: string
    items: MenuItem[]
  }