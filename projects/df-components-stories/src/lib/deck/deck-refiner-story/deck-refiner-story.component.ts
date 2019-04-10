import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DeckItem, CardType } from "../../../../../df-components/src/public_api"

@Component({
  selector: "df-deck-refiner-story",
  templateUrl: "./deck-refiner-story.component.html",
  styleUrls: ["./deck-refiner-story.component.scss"]
})
export class DeckRefinerStoryComponent implements OnInit {
  @Input()
  public grandParent: DeckItem

  @Input()
  public cards: DeckItem[]

  @Input()
  public cardTypes: string[]

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()

  @Output()
  public goBack: EventEmitter<any> = new EventEmitter()
 // Leave this it's the weird way you have to do enums in the template
 public cardType = CardType
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

  public handleAction($event) {
    this.onAction.emit($event)
  }

  public handleGoBack() {
    this.goBack.emit(this.grandParent)
  }
}
