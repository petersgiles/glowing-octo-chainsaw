import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { DocumentStatus } from "../models/document-status"

@Component({
  selector: "df-status-picker",
  templateUrl: "./status-picker.component.html",
  styleUrls: ["./status-picker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StatusPickerComponent),
      multi: true
    }
  ]
})
export class StatusPickerComponent implements ControlValueAccessor {


constructor(private changeDetectorRef: ChangeDetectorRef){

}

  // tslint:disable-next-line:variable-name
  public _status: string;

  
  @Input()
  public set status(val: string) {
    // tslint:disable-next-line:no-console
    console.log('status set',val)
    this._status = val
    this.changeDetectorRef.detectChanges()
    this.propagateChange(this._status)
  }

  public get status(): string {
    // tslint:disable-next-line:no-console
    console.log('status get', this._status)
    return this._status
  }

  @Input()
  public statuses: DocumentStatus[]

  // tslint:disable-next-line:no-empty
  public propagateChange = (_: any) => {}

  public writeValue(obj: any): void {
    // tslint:disable-next-line:no-console
    console.log("writeValue", obj)
    if (obj) {
      this.status = obj
    }
  }
  public registerOnChange(fn: any): void {
    // tslint:disable-next-line:no-console
    console.log("registerOnChange")
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
  }
}
