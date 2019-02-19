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
import { ButtonModule } from "../../button"
import { CardType } from "../models/card-type-enum"
import { DeckItem } from "../models/deck-item-model"
import { withLatestFrom, map } from "rxjs/operators"
import { ChartsModule } from "ng2-charts/ng2-charts"

const cards$: BehaviorSubject<DeckItem[]> = new BehaviorSubject(cards)

const parent$: BehaviorSubject<string> = new BehaviorSubject(null)

const displayCards$: Observable<DeckItem[]> = parent$.pipe(
  withLatestFrom(cards$),
  map(([parentId, cards]) =>
    cards.filter(c => {
      return c.parent == parentId
    })
  )
)

const grandParent$: Observable<DeckItem> = parent$.pipe(
  withLatestFrom(cards$),
  map(([parentId, cards]) => {
    return parentId ? cards.find(c => c.id == parentId) : null
  })
)

const props = {
  parent$: parent$,
  grandParent$: grandParent$,
  cards$: displayCards$,
  handleEvent: ($event, name) => {
    action(name)($event)
  },
  handleGoBack: parent => {
    parent$.next(parent.parent)
    action("Go Back")(true)
  },
  handleAction: $event => {
    const cardType = CardType
    if ($event.cardType == cardType.Parent) {
      parent$.next($event.id)
      action("Parent Navigation")($event.id)
    } else {
      action("Button Action")($event)
    }
  }
}

storiesOf("Deck", module)
  .addParameters({ jest: ["deck.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        ChartsModule,
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
    <section><button *ngIf="(grandParent$ | async) as gp" mdc-button dense (click)="handleGoBack(gp)">{{gp?.title}}</button></section>
    <df-deck [cards]="cards$ | async" (onAction)="handleAction($event)"></df-deck>
    `,
    props: props
  }))
  .add("Editable", () => ({
    template: `
    <section><button *ngIf="(grandParent$ | async) as gp" mdc-button dense (click)="handleGoBack(gp)">{{gp?.title}}</button></section>
    <df-deck [cards]="cards$ | async" [readOnly]="false" (onAction)="handleAction($event)" (onEdit)="handleEvent($event, 'onEdit')"></df-deck>
    `,
    props: props
  }))
