import { Component, OnInit, Input, Inject } from "@angular/core"
import { MdcDialogRef, MDC_DIALOG_DATA } from "@angular-mdc/web"

export const ARE_YOU_SURE_ACCEPT = "accept"
export const ARE_YOU_SURE_CLOSE = "close"

@Component({
  selector: "df-dialog-are-you-sure",
  template: `
    <mdc-dialog>
      <mdc-dialog-surface>
        <mdc-dialog-title
          >Are you sure you want to take this action?</mdc-dialog-title
        >
        <mdc-dialog-content>
          {{ content }}
        </mdc-dialog-content>
        <mdc-dialog-actions>
          <button mdcDialogButton mdcDialogAction="${ARE_YOU_SURE_CLOSE}">
            No
          </button>
          <button
            mdcDialogButton
            mdcDialogAction="${ARE_YOU_SURE_ACCEPT}"
            default
          >
            Yes
          </button>
        </mdc-dialog-actions>
      </mdc-dialog-surface>
    </mdc-dialog>
  `,
  styles: [``]
})
export class DialogAreYouSureComponent implements OnInit {
  constructor(
    public dialogRef: MdcDialogRef<DialogAreYouSureComponent>,
    @Inject(MDC_DIALOG_DATA) public content: any
  ) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
