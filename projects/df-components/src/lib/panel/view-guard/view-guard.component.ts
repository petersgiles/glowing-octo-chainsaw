import { Component, OnInit, Input } from '@angular/core'
import {
  OPERATION_RIGHT_WRITE,
  OPERATION_RIGHT_READ,
  OPERATION_RIGHT_HIDE
} from './view-guard-operations'
@Component({
  selector: 'df-view-guard',
  templateUrl: './view-guard.component.html',
  styles: [``]
})
export class ViewGuardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  operation

  WRITE = OPERATION_RIGHT_WRITE
  READ = OPERATION_RIGHT_READ
  HIDE = OPERATION_RIGHT_HIDE
}
