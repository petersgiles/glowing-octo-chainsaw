import { Component, OnInit, Input } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"
import { CardType } from "../models/card-type-enum"

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
  public cards: DeckItem[]

  public cardType = CardType
}
