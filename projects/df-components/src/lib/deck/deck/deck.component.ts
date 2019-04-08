import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"
import { getContrastYIQ } from "../../utils/colour"
import { Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms"
import { Subject, Subscription, BehaviorSubject } from "rxjs"
import { debounce, debounceTime, distinctUntilChanged } from "rxjs/operators"
import { webSafeColours } from "../../utils/web-safe-colours"
import { validateConfig } from "@angular/router/src/config"

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

const actionGroupItem = {
  title: [""],
  url: [""]
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

  private selectedCardSubscription: Subscription
  public cardEdit: Subject<any> = new Subject<any>()
  public showEditSupportingText: boolean = true
  public showEditActions: boolean = true
  public showEditMedia: boolean = false
  public currrentCardColour: any
  public selectedCard: DeckItem

  public cardForm: FormGroup = this.fb.group({
    id: [],
    title: ["", Validators.required],
    parent: [""],
    supportingText: [""],
    size: ["", Validators.required],
    cardType: ["", Validators.required],
    sortOrder: [],
    colour: ["", Validators.required],
    titleClass: [],
    media: this.fb.group({
      id: [],
      type: [],
      url: [""]
    }),
    actions: this.fb.array([]),
    data: []
  })

  get actions(): FormArray {
    return this.cardForm.get("actions") as FormArray
  }

  get action(): FormGroup {
    return this.fb.group(actionGroupItem)
  }

  public addAction(): void {
    this.actions.push(this.fb.group(actionGroupItem))
  }

  public handleRemoveAction(index: any, action: any) {
    // tslint:disable-next-line:no-console
    console.log(index, action)

    this.actions.removeAt(index)
  }

  public ngOnInit() {
    this.selectedCardSubscription = this.cardEdit
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((payload: { currentCard: DeckItem }) => {
        this.populateEditCardForm(payload)
      })

    this.cardForm.get("colour").valueChanges.subscribe(value => {
      if (value) {
        this.selectedCard.colour = value
      }
    })
    this.cardForm.get("cardType").valueChanges.subscribe(value => {
      this.handleCardType(value)
    })
  }

  public navigate(card: DeckItem) {
    if (card) {
      if (card.cardType === CardType.Parent) {
        this.onAction.emit(card)
      }
      if (card.actions && card.actions[0]) {
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

  // Card Type determins a few UI controls to be visible or not
  private handleCardType(typeName: any) {
    switch (typeName) {
      case "IMAGE":
      case "AUDIO":
        this.showEditMedia = true
        this.showEditSupportingText = true
        break
      case "VIDEO":
        this.showEditMedia = true
        this.showEditSupportingText = false
        break
      default:
        this.showEditMedia = false
        this.showEditSupportingText = true
    }
    if (this.showEditMedia) {
      this.cardForm
        .get("media")
        .get("url")
        .setValidators(Validators.required)
    } else {
      this.cardForm
        .get("media")
        .get("url")
        .clearValidators()
    }
  }

  private populateEditCardForm(payload: { currentCard: DeckItem }) {
    this.selectedCard = payload.currentCard

    console.log("actions", this.selectedCard.actions)

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
      actions: this.selectedCard.actions,
      data: this.selectedCard.data
    }

    this.selectedCard.actions.forEach(p => {
      console.log("load action", p)
      this.actions.push(this.action)
    })

    this.handleCardType(this.selectedCard.cardType)
    this.cardForm.patchValue(patchCard)


  }
}
