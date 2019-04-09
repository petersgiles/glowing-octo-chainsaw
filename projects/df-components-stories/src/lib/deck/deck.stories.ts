import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { deckItems, cardTypes } from "./deck-data"
import { BehaviorSubject, Observable, combineLatest } from "rxjs"
import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcFormFieldModule,
  MdcTextFieldModule,
  MdcListModule,
  MdcRippleModule
} from "@angular-mdc/web"

import {
  DeckModule,
  ButtonModule,
  CardType,
  DeckItem
} from "../../../../../projects/df-components/src/public_api"

import { withLatestFrom, map } from "rxjs/operators"
import { ChartsModule } from "ng2-charts/ng2-charts"
import { DeckRefinerStoryComponent } from "./deck-refiner-story/deck-refiner-story.component"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { NgSelectModule } from "@ng-select/ng-select"
import { NgxWigModule } from "ngx-wig"
import { stringify } from "querystring"

const cards$: BehaviorSubject<DeckItem[]> = new BehaviorSubject(deckItems)

const parent$: BehaviorSubject<string> = new BehaviorSubject(null)

const cardTypes$: BehaviorSubject<string[]> = new BehaviorSubject(cardTypes)

const selectedCard$: BehaviorSubject<DeckItem> = new BehaviorSubject(null)

const displayCards$: Observable<DeckItem[]> = combineLatest(
  parent$,
  cards$
).pipe(
  map(([parentId, cards]) =>
    cards
      .filter(c => {
        return c.parent == parentId
      })
      .sort((a, b) => {
        return Number(a.sortOrder) < Number(b.sortOrder) ? -1 : 1
      })
  )
)

const grandParent$: Observable<DeckItem> = parent$.pipe(
  withLatestFrom(cards$),
  map(([parentId, cards]) => {
    return parentId ? cards.find(c => c.id == parentId) : null
  })
)

const eligibleParents$: Observable<
  { id: string; title: string }[]
> = selectedCard$.pipe(withLatestFrom(cards$)).pipe(
  map(([selectedCard, cards]) => {
    if (selectedCard) {
      return cards
        .filter(c => c.id !== selectedCard.id)
        .map(c => ({ id: c.id, title: c.title }))
    }
  })
)

const props = {
  parent$: parent$,
  grandParent$: grandParent$,
  cards$: displayCards$,
  cardTypes$: cardTypes$,
  eligibleParents$: eligibleParents$,
  selectedCard$: selectedCard$,
  handleEvent: ($event, name) => {
    console.log($event)
    switch (name) {
      case "onEdit":
        selectedCard$.next($event)
    }
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
  },
  handleSubmitted: submittedCard => {
    action("🦊 Submitted")(submittedCard)
    const oldCards = cards$.getValue()
    action("🦊 OldCards")(oldCards)
    const newCards = oldCards.filter(p => submittedCard.id !== p.id)
    if (!submittedCard.id) {
      submittedCard.id = Math.random().toString()
    }
    newCards.push(submittedCard)
    action("🦊 NewCards")(newCards)
    cards$.next(newCards)
    action("🦊 Edited Card")(submittedCard)
  }
}

storiesOf("Deck", module)
  .addParameters({ jest: ["deck.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        ChartsModule,
        ReactiveFormsModule,
        NgSelectModule,
        FormsModule,
        MdcButtonModule,
        MdcIconModule,
        MdcIconButtonModule,
        MdcCardModule,
        MdcListModule,
        MdcFormFieldModule,
        MdcTextFieldModule,
        NgxWigModule,
        DeckModule,
        ButtonModule,
        MdcRippleModule
      ],
      declarations: [DeckRefinerStoryComponent]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("ReadOnly", () => ({
    template: `
    <section><button *ngIf="(grandParent$ | async) as gp" mdc-button dense (click)="handleGoBack(gp)">{{gp?.title}}</button></section>
    <df-deck  [cards]="cards$ | async" (onAction)="handleAction($event)"></df-deck>
    `,
    props: props
  }))
  .add("Editable", () => ({
    template: `
    <section><button *ngIf="(grandParent$ | async) as gp" mdc-button dense (click)="handleGoBack(gp)">{{gp?.title}}</button></section>
    <df-deck [cardTypes]="cardTypes$ | async"  [cards]="cards$ | async" [parent] = "parent$ | async" [eligibleParents] = "eligibleParents$ | async"  [readOnly]="false" (onSubmitted)="handleSubmitted($event)" (onAction)="handleAction($event)" (onEdit)="handleEvent($event, 'onEdit')"></df-deck>
    `,
    props: props
  }))
  .add("Big Story", () => ({
    template: `
       <df-deck-refiner-story  [cards]="cards$ | async"></df-deck-refiner-story>
    `,
    props: props
  }))
