import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core"
import { getContrastYIQ } from "../../utils/colour"

@Component({
  selector: "df-expander-panel",
  templateUrl: "./expander-panel.component.html",
  styleUrls: ["./expander-panel.component.scss"]
})
export class ExpanderPanelComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Input()
  public title: string

  @Input()
  public readOnly = true

  @Input()
  public expanded = false

  // tslint:disable-next-line:variable-name
  private _background: string = '#CFD8DC'
  // tslint:disable-next-line:variable-name
  private _textColour: string

  @Input()
  set background(hexcolour) {
    this._background = hexcolour
    this._textColour = getContrastYIQ(hexcolour)
  }

  get background(): string {
    return this._background
  }

  get textColour(): string {
    return this._textColour
  }

  @Output()
  public onToggleExpand: EventEmitter<boolean> = new EventEmitter()
}
