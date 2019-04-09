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
  MdcRippleModule,
  MdcDialogModule,
  MdcDialog
} from "@angular-mdc/web"

import {
  DeckModule,
  ButtonModule,
  CardType,
  DeckItem,
  DialogsModule,
  DialogAreYouSureComponent
} from "../../../../../projects/df-components/src/public_api"

import { withLatestFrom, map, first } from "rxjs/operators"
import { ChartsModule } from "ng2-charts/ng2-charts"
import { DeckRefinerStoryComponent } from "./deck-refiner-story/deck-refiner-story.component"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { NgSelectModule } from "@ng-select/ng-select"
import { NgxWigModule } from "ngx-wig"
import { DeckEditCardStoryComponent } from "./deck-edit-card-story/deck-edit-card-story.component"

const ENTRYCOMPONENTS = [DialogAreYouSureComponent]

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
    } else {
      return []
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
        break
      case "onCancel":
        selectedCard$.next(null)
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
        MdcRippleModule,
        MdcDialogModule,
        DialogsModule
      ],
      declarations: [DeckRefinerStoryComponent, DeckEditCardStoryComponent],
      entryComponents: ENTRYCOMPONENTS
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
    <df-deck-edit-card-story [cardTypes]="cardTypes$ | async" [selectedCard]="selectedCard$ | async"  [cards]="cards$ | async" [grandParent]="(grandParent$ | async)"  [parent] = "parent$ | async" [eligibleParents] = "eligibleParents$ | async" [readOnly]="false" 
    (onSubmitted)="handleSubmitted($event)" (onAction)="handleAction($event)" (onCancel)="handleEvent($event, 'onCancel')" (onEdit)="handleEvent($event, 'onEdit')" (goBack) ="handleGoBack($event)">
    </df-deck-edit-card-story>
    `,

    props: props
  }))
  .add("Big Story", () => ({
    template: `
       <df-deck-refiner-story [grandParent]="(grandParent$ | async)" [cards]="cards$ | async" (onAction)="handleAction($event)" (goBack) ="handleGoBack($event)"></df-deck-refiner-story>
    `,
    props: props
  }))
