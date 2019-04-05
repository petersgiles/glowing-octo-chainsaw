import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"
import { getContrastYIQ } from "../../utils/colour"
import { Validators, FormBuilder, FormGroup } from "@angular/forms"
import { Subject, Subscription, BehaviorSubject } from "rxjs"
import { debounce, debounceTime, distinctUntilChanged } from "rxjs/operators"
import { webSafeColours } from "../../utils/web-safe-colours"

const defaultCard = {
  title: "New Card",
  supportingText: null,
  id: null,
  parent: null,
  size: "4",
  cardType: CardType.Standard,
  sortOrder: "999",
  colour: "DarkSlateGrey",
  titleClass: null,
  media: null,
  data: null
}

@Component({
  selector: "df-deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.scss"]
})
export class DeckComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor(private fb: FormBuilder) {}
  // tslint:disable-next-line:no-empty

  private selectedCardSubscription: Subscription
  public cardEdit: Subject<any> = new Subject<any>()

  @Input()
  public readOnly = true

  @Input()
  public cards: DeckItem[]

  @Input()
  public cardTypes: string[]

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()

  @Output()
  public onSubmitted: EventEmitter<DeckItem> = new EventEmitter()

  public webSafeColours$: BehaviorSubject<any> = new BehaviorSubject(
    webSafeColours
  )

  public selectedCard: DeckItem
  public cardForm: FormGroup = this.fb.group({
    id: [],
    title: ["", Validators.required],
    parent: [""],
    supportingText: ["", Validators.required],
    size: [""],
    cardType: [],
    sortOrder: [],
    colour: [],
    titleClass: [],
    media: this.fb.group({
      id: [],
      type: [],
      url: []
    }),
    // actions: this.fb.group({}),
    data: []
  })

  public ngOnInit() {
    this.selectedCardSubscription = this.cardEdit
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((payload: { $event: any; currentCard: DeckItem }) => {
        this.populateEditCardForm(payload)
      })
  }

  private populateEditCardForm(payload: {
    $event: any
    currentCard: DeckItem
  }) {
    this.selectedCard = payload.currentCard
    const patchCard = {
      id: this.selectedCard.id,
      title: this.selectedCard.title,
      parent: this.selectedCard.parent,
      supportingText: this.selectedCard.supportingText,
      size: this.selectedCard.size,
      cardType: this.selectedCard.cardType,
      sortOrder: this.selectedCard.sortOrder,
      colour: this.selectedCard.colour,
      titleClass: this.selectedCard.titleClass,
      media: {
        type: this.selectedCard.media ? this.selectedCard.media.type : "",
        url: this.selectedCard.media ? this.selectedCard.media.url : "",
        id: this.selectedCard.media ? this.selectedCard.media.id : ""
      },
      data: this.selectedCard.data
    }
    this.cardForm.patchValue(patchCard)
  }

  public navigate(card: DeckItem) {
    if (card) {
      if (card.cardType === CardType.Parent) {
        this.onAction.emit(card)
      }
      if (card.actions[0]) {
        this.onAction.emit(card.actions[0])
      }
    }
  }

  public getTextColour(hexcolour) {
    return getContrastYIQ(hexcolour)
  }

  // Leave this it's the weird way you have to do enums in the template
  public cardType = CardType

  public handleCancelEditCard(card) {
    this.cardForm.reset()
    this.selectedCard = null
  }

  public handleSubmit(card: DeckItem) {
    if (!this.cardForm.valid) return

    const editCard = this.mapCard(this.cardForm.value)
    this.onSubmitted.emit(editCard)
    this.selectedCard = null
  }

  public ngOnDestroy(): void {
    this.selectedCardSubscription.unsubscribe()
  }

  private mapCard(deckItem): any {
    const map: DeckItem = {
      ...deckItem
    }
    return map
  }
}
