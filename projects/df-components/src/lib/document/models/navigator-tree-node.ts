
export interface NavigatorTreeNode {
    id: string
    caption: string
    meta?: string
    parent: string
    children?: NavigatorTreeNode[]
    colour?: string
    order?: number
    active?: boolean
    expanded?: boolean
  }
  