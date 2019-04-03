import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core"
import {
  MegaTagsService,
  DeckItem
} from "../../../../../df-components/src/public_api"
import { BehaviorSubject, Subscription, Observable } from "rxjs"
import { withLatestFrom, map, switchMap } from "rxjs/operators"

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
  public selectedCard: DeckItem

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

  public handleAction($event) {
    // tslint:disable-next-line:no-console
    console.log($event)
    // if submit edited card then handle it here
  }

  public handelSubmitted($event) {
    console.log($event)
  }

  public handleGoBack(gp) {
    // tslint:disable-next-line:no-console
    console.log(gp)
  }
}
