import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RefinerGroup, Refiner } from './refiner.models';

@Component({
  selector: 'df-refiner',
  templateUrl: './refiner.component.html',
  styleUrls: ['./refiner.component.scss']
})
export class RefinerComponent  {
  @Input()
  refinerGroups: RefinerGroup[]
  
  @Output()
  refine: EventEmitter<RefinerGroup[]> = new EventEmitter()

  handleClickRefiner(refiner: Refiner) {
    refiner.selected = !refiner.selected
    this.refine.emit(this.refinerGroups.map(group => ({
      ...group,
      refiners: group.refiners.filter(refiner => refiner.selected)
    })))
  }
}
