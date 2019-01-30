export interface Refiner {
  id: string
  title: string
  selected?: boolean
  count?: number
}

export interface RefinerGroup {
  id: string
  title: string
  refiners: Refiner[]
  expanded?: boolean
  count?: number
}
