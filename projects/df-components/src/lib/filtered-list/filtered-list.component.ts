import { Component, EventEmitter, Input, Output } from "@angular/core"
import { ListItem } from "./filtered-list.models"

@Component({
  selector: "df-filtered-list",
  templateUrl: "./filtered-list.component.html",
  styleUrls: ["./filtered-list.component.scss"]
})
export class FilteredListComponent<T> {
  get filteredList() {
    if (!this.items) {
      return []
    }
    if (!this.filter) {
      return this.items
    }

    return this.items.filter(item => this.filterExpression(item, this.filter))
  }
  @Input() public items: ListItem<T>[]
  @Input() public label = "Filter"

  @Output() public select = new EventEmitter<ListItem<T>>()

  public filter: string
  public selectedId: string
  @Input() public filterExpression = (listItem: ListItem<T>, filter: string) =>
    (filter &&
      listItem.title &&
      listItem.title.toLowerCase().indexOf(filter.toLowerCase()) > -1) ||
    (filter &&
      listItem.info &&
      listItem.info.toLowerCase().indexOf(filter.toLowerCase()) > -1)

  public handleClick(item: ListItem<T>) {
    this.selectedId = item.id
    this.select.emit(item)
  }
}
