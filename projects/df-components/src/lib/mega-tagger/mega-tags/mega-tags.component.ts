import { Component, OnInit, Input } from '@angular/core';
import { MegaTag } from '../models/mega-tag';

@Component({
  selector: 'df-mega-tags',
  templateUrl: './mega-tags.component.html',
  styleUrls: ['./mega-tags.component.scss']
})
export class MegaTagsComponent implements OnInit {

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() { }

  @Input()
  public artifact: string | number

  @Input()
  public tags: MegaTag[]
}
