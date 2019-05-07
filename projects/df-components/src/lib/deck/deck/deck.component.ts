import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem, Brief } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"
import { getContrastYIQ } from "../../utils/colour"
import { Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms"
import { Subject, Subscription, BehaviorSubject } from "rxjs"
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators"
import { webSafeColours } from "../../utils/web-safe-colours"
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor'

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
  actions: null,
  data: null,
  hasChildren: false
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

  @Input()
  public readOnly = true

  @Input()
  public allowMutate = true

  @Input()
  public cards: DeckItem[]

  @Input()
  public briefs: Brief[]

  @Input()
  public eligibleParents: any[]

  @Input()
  public cardTypes: string[]

  @Input()
  public parent: string

  @Input()
  public selectedCard: DeckItem

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()

  @Output()
  public onSubmitted: EventEmitter<DeckItem> = new EventEmitter()

  @Output()
  public onEdit: EventEmitter<DeckItem> = new EventEmitter()

  @Output()
  public onCancel: EventEmitter<string> = new EventEmitter()

  public webSafeColours$: BehaviorSubject<any> = new BehaviorSubject(
    webSafeColours
  )

  public editorOptions: JsonEditorOptions = new JsonEditorOptions()

  private selectedCardSubscription: Subscription
  public cardEdit: Subject<any> = new Subject<any>()
  public showEditSupportingText: boolean = true
  public showBriefList: boolean = true
  public showEditMedia: boolean = false
  public showEditData: boolean = true
  public currrentCardColour: any

  // Leave this it's the weird way you have to do enums in the template
  public cardType = CardType

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
    data: [],
    selectedBriefs: []
  })

  get actions(): FormArray {
    return this.cardForm.get("actions") as FormArray
  }

  get action(): FormGroup {
    return this.fb.group(actionGroupItem)
  }

  constructor(private fb: FormBuilder) {
    this.editorOptions.mode = 'tree'
    this.editorOptions.modes = ['code', 'form', 'text', 'tree', 'view']
  }


  public ngOnInit() {
    this.selectedCardSubscription = this.cardEdit
      .pipe(
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((payload: { currentCard: DeckItem }) => {
        this.populateEditCardForm(payload.currentCard)
        this.onEdit.emit(payload.currentCard)
      })

    this.cardForm.get("colour").valueChanges.subscribe(value => {
      if (this.selectedCard) {
        this.selectedCard.colour = value
      }
    })

    this.cardForm.get("cardType").valueChanges.subscribe(value => {
      this.handleCardType(value)
    })
  }

  public handleAddNewCard(): void {
    defaultCard.parent = this.parent
    this.populateEditCardForm(defaultCard)
    if(this.allowMutate){
      this.cards.push(defaultCard)
    }
    this.onEdit.emit(defaultCard)
  }

  public handleAddAction(): void {
    this.actions.push(this.fb.group(actionGroupItem))
  }

  public handleRemoveAction(index: any, action: any) {
    this.actions.removeAt(index)
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

  public handleCancelEditCard(card) {
    this.onCancel.emit(card)
    // remove card just created
    if (!card! || card.id) {
      const cardItems = this.cards.filter(item => item.id)
      this.cards = cardItems
    }
    this.clearEditedData(card)
  }

  public handleSubmit(card: DeckItem) {
    if (!this.cardForm.valid) return
    const editedCard = this.mapCard(this.cardForm.value)
    this.onSubmitted.emit(editedCard)
    this.clearEditedData(card)
  }

  public ngOnDestroy(): void {
    this.selectedCard = null
    this.selectedCardSubscription.unsubscribe()
  }

  private mapCard(deckItem): any {
    const map: DeckItem = {
      ...deckItem
    }
    return map
  }

  private clearEditedData(card): void {
    this.selectedCard = null
    this.cardForm.reset()
    // As form.reset won't clear form array controls
    // hence we have to do it here
    this.cardForm.setControl("actions", new FormArray([]))
  }

  // Card Type determins a few UI controls to be visible or not
  // TODO: a better way to handle the UI changes, maybe split to several edit tempaltes?
  private handleCardType(typeName: CardType) {
    this.showEditMedia = typeName === CardType.Image || typeName === CardType.Audio || typeName === CardType.Video
    this.showBriefList = typeName === CardType.BriefSummary
    this.showEditData = typeName === CardType.BriefSummary || typeName === CardType.Chart

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

  private populateEditCardForm(currentCard: DeckItem) {
    this.selectedCard = currentCard
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
      actions: this.selectedCard.actions ? this.selectedCard.actions : [],
      data: this.selectedCard.data
    }

    if (this.selectedCard.actions) {
      this.selectedCard.actions.forEach(p => {
        this.actions.push(this.action)
      })
    }
    this.handleCardType(this.selectedCard.cardType)

    if (
      this.selectedCard.cardType === CardType.BriefSummary &&
      this.selectedCard.data
    ) {
      const selectedBriefs = this.selectedCard.data
      this.cardForm.get("selectedBriefs").setValue(selectedBriefs)
// tslint:disable-next-line: no-console
      console.log(selectedBriefs)
    }
    this.cardForm.patchValue(patchCard)
  }
  public handleChangeBrief($event) {
    this.cardForm
      .get("data")
      .setValue(
        this.cardForm.get("selectedBriefs").value
      )
  }
}
