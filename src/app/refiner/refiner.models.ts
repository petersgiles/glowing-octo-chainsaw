export interface RefinerItem {
    id: string
    title: string
    selected?: boolean
    count?: number
}

export interface RefinerGroup {
    id: string
    title: string
    children: RefinerItem[]        
    expanded?: boolean
    count?: number
}