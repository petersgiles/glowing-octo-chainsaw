import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { MdcDialog } from "@angular-mdc/web"
import { DialogAreYouSureComponent } from "./../../dialog-are-you-sure/dialog-are-you-sure.component"
import { first } from "rxjs/operators"

@Component({
  selector: "df-dialog-are-you-sure-story",
  templateUrl: "./dialog-are-you-sure-story.component.html",
  styles: [
    `
      .demo-content {
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: 1.5rem 1rem;
        padding: 1rem;
      }

      .demo-layout__row {
        display: flex;
        flex-flow: row wrap;
        margin-top: 0.8rem;
      }
    `
  ]
})
export class DialogAreYouSureStoryComponent {
  constructor(
    public dialog: MdcDialog
    // tslint:disable-next-line:no-empty
    ) {}

  @Output()
  public onStoryEvent: EventEmitter<any> = new EventEmitter()

  public openDialog() {
    // tslint:disable-next-line:no-console
    console.log("handleDangerousAction")
    const dialogRef = this.dialog.open(DialogAreYouSureComponent)

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(result => {
        this.onStoryEvent.emit(result)
      })
  }
}
