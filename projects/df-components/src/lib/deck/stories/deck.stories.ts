import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"
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

const cards$: BehaviorSubject<any[]> = new BehaviorSubject(
  cards.filter(c => c.parent == null)
)

storiesOf("Deck", module)
  .addParameters({ jest: ["deck.component"] })
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

  .add("Deck", () => ({
    template: `
    <df-deck [cards]="cards$ | async"></df-deck>
    `,
    props: {
      cards$: cards$
    }
  }))
