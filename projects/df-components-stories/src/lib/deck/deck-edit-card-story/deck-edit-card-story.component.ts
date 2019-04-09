import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import {
  DeckItem,
  DialogAreYouSureComponent,
  CardType
} from "../../../../../df-components/src/public_api"
import { MdcDialog } from "@angular-mdc/web"
import { first } from "rxjs/operators"

@Component({
  selector: "df-deck-edit-card-story",
  templateUrl: "./deck-edit-card-story.component.html",
  styleUrls: ["./deck-edit-card-story.component.scss"]
})
export class DeckEditCardStoryComponent implements OnInit {
  constructor(private dialog: MdcDialog) {}
  @Input()
  public grandParent: DeckItem

  @Input()
  public readOnly = true

  @Input()
  public cards: DeckItem[]

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
  public goBack: EventEmitter<DeckItem> = new EventEmitter()

  @Output()
  public onCancel: EventEmitter<string> = new EventEmitter()

  // Leave this it's the weird way you have to do enums in the template
  public cardType = CardType

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

  public handleSubmitted($event) {
    this.onSubmitted.emit($event)
  }

  public handleEdit($event) {
    this.onEdit.emit($event)
  }

  public handleCancel($event) {
    this.onCancel.emit($event)
  }

  public handleAction($event) {
    this.onAction.emit($event)
  }

  public handleGoBack() {
    if (this.selectedCard) {
      const dialogRef = this.dialog.open(DialogAreYouSureComponent, {
        data: `It looks like you have been editing a card: ${
          this.selectedCard.title
        } . If you leave before saving, your changes will be lost.`
      })
      dialogRef
        .afterClosed()
        .pipe(first())
        .subscribe(result => {
          if (result === "accept") {
            this.goBack.emit(this.grandParent)
            this.selectedCard = null
          }
        })
    } else {
      this.goBack.emit(this.grandParent)
    }
  }
}
