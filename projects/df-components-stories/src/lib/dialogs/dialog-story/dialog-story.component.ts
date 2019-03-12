import { Component, Output, EventEmitter } from "@angular/core"
import { MdcDialog } from "@angular-mdc/web"
import { first } from "rxjs/operators"
import { DialogAreYouSureComponent } from '../../../../../../projects/df-components/src/public_api';


@Component({
  selector: "df-dialog-story",
  templateUrl: "./dialog-story.component.html",
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
export class DialogStoryComponent {
  constructor(
    public dialog: MdcDialog
    ) {}

  @Output()
  public onStoryEvent: EventEmitter<any> = new EventEmitter()

  public openDialog() {
    // tslint:disable-next-line:no-console
    console.log("handleDangerousAction")
    const dialogRef = this.dialog.open(DialogAreYouSureComponent, { })

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(result => {
        this.onStoryEvent.emit(result)
      })
  }
}
