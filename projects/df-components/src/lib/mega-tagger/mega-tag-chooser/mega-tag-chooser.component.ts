import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'df-mega-tag-chooser',
  templateUrl: './mega-tag-chooser.component.html',
  styleUrls: ['./mega-tag-chooser.component.scss']
})
export class MegaTagChooserComponent implements OnInit {

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() { }

  @Input()
  public artifact: string | number
  
}
