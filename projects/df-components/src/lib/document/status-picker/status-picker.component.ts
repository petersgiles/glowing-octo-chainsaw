import { Component, OnInit, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { DocumentStatus } from "../models/document-status"

@Component({
  selector: "df-status-picker",
  templateUrl: "./status-picker.component.html",
  styleUrls: ["./status-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StatusPickerComponent),
      multi: true
    }
  ]
})
export class StatusPickerComponent implements OnInit, ControlValueAccessor {

  
  @Input()
  public status: string

  @Input()
  public statuses: DocumentStatus[]

  // tslint:disable-next-line:no-empty
  public propagateChange = (_: any) => {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  public writeValue(obj: string): void {
    // tslint:disable-next-line:no-console
    console.log(obj)
    if (obj) {
      this.status = obj
    }
  }
  public registerOnChange(fn: any): void {
    this.propagateChange = fn
  }
  
  // tslint:disable-next-line:no-empty
  public registerOnTouched(fn: any): void {}

  // tslint:disable-next-line:no-empty
  public setDisabledState?(isDisabled: boolean): void {}

  public onSelectionChange(sli) {
    // tslint:disable-next-line:no-console
    console.log('onSelectionChange', sli)
    this.status = sli.id
    this.propagateChange(this.status)
  }
}
