import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RefinerGroup, RefinerType } from './refiner.models';

@Component({
  selector: 'df-refiner',
  templateUrl: './refiner.component.html',
  styleUrls: ['./refiner.component.scss']
})
export class RefinerComponent  {
  @Input()
  refinerGroups: RefinerGroup[]
  
  @Output()
  selectRefiner: EventEmitter<RefinerType> = new EventEmitter()

  handleClickRefiner(refiner: RefinerType) {
    refiner.selected = !refiner.selected
    this.selectRefiner.emit(refiner)
  }
}
