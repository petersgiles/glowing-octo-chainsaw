import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Refiner, RefinerGroup } from "./refiner.models"

@Component({
  selector: "df-refiner",
  templateUrl: "./refiner.component.html",
  styleUrls: ["./refiner.component.scss"]
})
export class RefinerComponent {
  @Input()
  public refinerGroups: RefinerGroup[]

  @Output()
  public refine: EventEmitter<RefinerGroup[]> = new EventEmitter()

  public handleClickRefiner(refiner: Refiner) {
    refiner.selected = !refiner.selected
    this.refine.emit(
      this.refinerGroups
        .map(group => ({
          ...group,
          refiners: group.refiners.filter(r => r.selected)
        }))
        .filter(group => group.refiners.length)
    )
  }
}
