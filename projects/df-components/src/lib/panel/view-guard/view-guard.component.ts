import { Component, OnInit, Input } from "@angular/core"
import {
  OPERATION_RIGHT_WRITE,
  OPERATION_RIGHT_READ,
  OPERATION_RIGHT_HIDE
} from "./view-guard-operations"
@Component({
  selector: "df-view-guard",
  templateUrl: "./view-guard.component.html",
  styles: [``]
})
export class ViewGuardComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}

  @Input()
  public operation: any

  public WRITE = OPERATION_RIGHT_WRITE
  public READ = OPERATION_RIGHT_READ
  public HIDE = OPERATION_RIGHT_HIDE
}
