import { CardType } from "./card-type-enum"

export interface DeckItemMedia {
  url: string
  type?: string
}

export interface DeckItemChartColor {
  backgroundColor: string
  borderColor: string
  pointBackgroundColor: string
  pointBorderColor: string
  pointHoverBackgroundColor: string
  pointHoverBorderColor: string
}
export interface DeckItemChartData {
  data: any[]
  label: string
}

export interface DeckItemChartOptions {
  responsive: boolean
}
export interface DeckItemChart {
  chartData: DeckItemChartData[]
  chartLegend: boolean
  chartLabels: any[]
  chartOptions: DeckItemChartOptions
  chartType: "line" | "pie"
  chartColors?: DeckItemChartColor[]
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
  data: any
}