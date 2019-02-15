import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"

import { withReadme } from "storybook-readme"
import * as Readme from "../CARDS.md"
import { DeckModule } from "../deck.module"
import { cards } from "./deck-data"
import { BehaviorSubject } from "rxjs"
import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcImageListModule
} from "@angular-mdc/web"
import { CardType } from "../models/card-type-enum"

const cardStandard$: BehaviorSubject<any> = new BehaviorSubject(
  cards.filter(c => c.cardType == CardType.Standard)[0]
)

const cardImage$: BehaviorSubject<any> = new BehaviorSubject(
  cards.filter(c => c.cardType == CardType.Image)[0]
)

storiesOf("Card", module)
  .addParameters({ jest: ["card-standard.component", "card-parent.component", "card-markdown.component", "card-image.component", "card-chart.component", "card-audio.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        MdcButtonModule,
        MdcIconModule,
        MdcCardModule,
        MdcIconButtonModule,
        MdcImageListModule,
        DeckModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Standard", () => ({
    template: `
    <df-card-standard [card]="card$ | async"></df-card-standard>
    `,
    props: {
      card$: cardStandard$
    }
  }))
  .add("Parent", () => ({
    template: `
    <df-card-parent [card]="card$ | async"></df-card-parent>
    `,
    props: {
      card$: cardStandard$
    }
  }))
  .add("Markdown", () => ({
    template: `
    <df-card-markdown [card]="card$ | async"></df-card-markdown>
    `,
    props: {
      card$: cardStandard$
    }
  }))
  .add("Image", () => ({
    template: `
    <df-card-image [card]="card$ | async"></df-card-image>
    `,
    props: {
      card$: cardImage$
    }
  }))
  .add("Chart", () => ({
    template: `
    <df-card-chart [card]="card$ | async"></df-card-chart>
    `,
    props: {
      card$: cardStandard$
    }
  }))
  .add("Audio", () => ({
    template: `
    <df-card-audio [card]="card$ | async"></df-card-audio>
    `,
    props: {
      card$: cardStandard$
    }
  }))

// <df-card-standard *ngSwitchCase="cardType.Standard" [card]="card"></df-card-standard>
