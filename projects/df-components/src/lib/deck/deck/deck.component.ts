import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"
import { getContrastYIQ } from "../../utils/colour"

@Component({
  selector: "df-deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.scss"]
})
export class DeckComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Input()
  public readOnly = true

  @Input()
  public cards: DeckItem[]

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()

  @Output()
  public onEdit: EventEmitter<DeckItem> = new EventEmitter()

  public navigate(card) {
    if (card && card.actions[0]) {
      this.onAction.emit(card.actions[0])
    }
  }

  public getTextColour(hexcolour) {
    return getContrastYIQ(hexcolour)
  }

  // Leave this it's the weird way you have to do enums in the template
  public cardType = CardType
}
