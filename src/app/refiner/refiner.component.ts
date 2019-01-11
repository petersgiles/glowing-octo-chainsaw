import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RefinerGroup, RefinerItem } from './refiner.models';

@Component({
  selector: 'df-refiner',
  templateUrl: './refiner.component.html',
  styleUrls: ['./refiner.component.scss']
})
export class RefinerComponent  {
  @Input()
  refinerGroups: RefinerGroup[]
  
  @Output()
  selectRefiner: EventEmitter<RefinerItem> = new EventEmitter()

  handleClickRefiner(refiner: RefinerItem) {
    refiner.selected = !refiner.selected
    this.selectRefiner.emit(refiner)
  }
}
