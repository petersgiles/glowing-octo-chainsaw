import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'df-mega-tagger-story',
  templateUrl: './mega-tagger-story.component.html',
  styleUrls: ['./mega-tagger-story.component.scss']
})
export class MegaTaggerStoryComponent implements OnInit {

  public artifact = null

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Output()
  public onSelectionChange: EventEmitter<any> = new EventEmitter()

}
