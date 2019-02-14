export enum CardType {
  Standard = "STANDARD",
  Parent = "PARENT",
  Wiki = "WIKI",
  Audio = "AUDIO",
  Video = "VIDEO",
  Embed = "EMBED",
  Frame = "FRAME",
  Chart = "CHART",
  Image = "IMAGE",
  Newtab = "NEWTAB"
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
  media: string
  data: string
}
