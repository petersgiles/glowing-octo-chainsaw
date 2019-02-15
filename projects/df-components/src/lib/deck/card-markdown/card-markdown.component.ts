import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem } from "../models/deck-item-model"

@Component({
  selector: "df-card-markdown",
  templateUrl: "./card-markdown.component.html",
  styleUrls: ["./card-markdown.component.scss"]
})
export class CardMarkdownComponent implements OnInit {
  @Input()
  public card: DeckItem
  @Output()
  public onNavigate: EventEmitter<DeckItem> = new EventEmitter()
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
