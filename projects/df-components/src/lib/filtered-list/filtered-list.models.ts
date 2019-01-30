export interface ListItem<T> {
  id: string
  title: string
  entity?: T
  link?: string
  info?: string
}
