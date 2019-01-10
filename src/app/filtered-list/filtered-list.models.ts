export interface ListItem<T> {
    id: string
    name: string
    entity?: T
    link?: string
    info?: string
}