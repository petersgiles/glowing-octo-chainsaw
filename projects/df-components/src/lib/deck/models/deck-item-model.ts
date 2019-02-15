import { CardType } from "./card-type-enum"

export interface DeckItemMedia {
  url: string
}

export interface DeckItem {
  id: string
  parent: string
  title: string
  supportingText: string
  size: string
  cardType: CardType
  actions: any[]
  sortOrder: string
  colour: string
  titleClass: string
  media: DeckItemMedia
  data: string
}
