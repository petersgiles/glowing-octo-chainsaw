import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"
import { getContrastYIQ } from "../../utils/colour"
import { Validators, FormBuilder, FormGroup } from "@angular/forms"
import { Subject, Subscription } from "rxjs"
import { debounce, debounceTime, distinctUntilChanged } from "rxjs/operators"
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

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()

  @Output()
  public onSubmitted: EventEmitter<DeckItem> = new EventEmitter()

  protected selectedCard: DeckItem
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
    media: [],
    data: []
  })

  public ngOnInit() {
    this.selectedCardSubscription = this.cardEdit
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((payload: { $event: any; currentCard: DeckItem }) => {
        if (
          this.selectedCard &&
          payload.currentCard.id !== this.selectedCard.id
        ) {
          if (confirm("are you sure you want to discard existing editing?")) {
            this.populateEditCardFormAndEmit(payload)
          }
        } else {
          this.populateEditCardFormAndEmit(payload)
        }
      })
  }

  private populateEditCardFormAndEmit(payload: {
    $event: any
    currentCard: DeckItem
  }) {
    this.selectedCard = payload.currentCard
    const patchCard = {
      title: this.selectedCard.title,
      supportingText: this.selectedCard.supportingText,
      id: this.selectedCard.id,
      parent: this.selectedCard.parent,
      size: this.selectedCard.size,
      cardType: this.selectedCard.cardType,
      sortOrder: this.selectedCard.sortOrder,
      colour: this.selectedCard.colour,
      titleClass: this.selectedCard.titleClass,
      media: this.selectedCard.media,
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

  public saveEditedCard(card: DeckItem) {
    if (!this.cardForm.valid) return
    const editCard = this.mapCard(this.cardForm.value)
    card.title = editCard.title
    card.supportingText = editCard.supportingText
      
    console.log(editCard)
    // emit this to parent for further process
    this.onSubmitted.emit(card)
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
