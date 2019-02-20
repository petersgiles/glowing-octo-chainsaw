import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { DocumentStatus } from "../models/document-status"

@Component({
  selector: "df-status-picker",
  templateUrl: "./status-picker.component.html",
  styleUrls: ["./status-picker.component.scss"]
})
export class StatusPickerComponent implements OnInit {
  @Input()
  public documentStatus: DocumentStatus

  @Input()
  public documentStatusList: DocumentStatus[]

  @Output()
  public onAction: EventEmitter<DocumentStatus> = new EventEmitter()

  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}