import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"
import { DeckModule } from "../deck.module"
import { cards } from "./deck-data"
import { BehaviorSubject, Observable } from "rxjs"
import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcImageListModule
} from "@angular-mdc/web"
import { ButtonModule } from '../../button';
import { CardType } from '../models/card-type-enum';
import { DeckItem } from '../models/deck-item-model';

const cards$: BehaviorSubject<any[]> = new BehaviorSubject(
  cards.filter(c => c.parent == null)
)

const parent$: BehaviorSubject<boolean> = new BehaviorSubject(null)

// const displayCard$: Observable<DeckItem> = []

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
        DeckModule,
        ButtonModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("ReadOnly", () => ({
    template: `
    <df-deck [cards]="cards$ | async" (onAction)="handleAction($event)"></df-deck>
    `,
    props: {
      cards$: cards$,
      handleAction: ($event) => {
        const cardType = CardType
        if($event.cardType == cardType.Parent) {
          action('Parent Navigation')($event)
        } else {
          action('Button Action')($event)
        }
        
      }
    }
  }))
  .add("Editable", () => ({
    template: `
    <df-deck [cards]="cards$ | async" [readOnly]="false" (onAction)="handleEvent($event, 'onAction')" (onEdit)="handleEvent($event, 'onEdit')"></df-deck>
    `,
    props: {
      cards$: cards$,
      handleEvent: ($event, name) => action(name)($event),
    }
  }))
