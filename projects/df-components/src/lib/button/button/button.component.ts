import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getContrastYIQ } from '../../utils/colour';

@Component({
  selector: 'df-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}


  @Input()
  public icon = 'add_alert'

  @Input()
  public title = 'Notify Me'

  public textColour: string

  @Input()
  set background(hexcolour) {
    this.textColour = getContrastYIQ(hexcolour)
  }

  @Output()
  public onClick: EventEmitter<any> = new EventEmitter()


}
