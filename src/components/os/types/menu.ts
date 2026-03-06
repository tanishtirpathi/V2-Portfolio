export type MenuItem = {
    label: string
    action?: string
    separator?: boolean
  }
  
  export type MenuSection = {
    title: string
    items: MenuItem[]
  }