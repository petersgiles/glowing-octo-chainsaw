import { Component, OnInit } from "@angular/core"
import { MdcDialogRef } from "@angular-mdc/web"

export const ARE_YOU_SURE_ACCEPT = "accept"
export const ARE_YOU_SURE_CLOSE = "close"

@Component({
  selector: "df-dialog-are-you-sure",
  templateUrl: "./dialog-are-you-sure.component.html",
  styleUrls: ["./dialog-are-you-sure.component.scss"]
})
export class DialogAreYouSureComponent implements OnInit {
  constructor(public dialogRef: MdcDialogRef<DialogAreYouSureComponent>) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
