import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ListItem } from './filtered-list.models'

@Component({
  selector: 'df-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})

export class FilteredListComponent<T> {
  @Input() items: ListItem<T>[]
  @Input() label = "Filter"
  @Input() filterExpression = (listItem: ListItem<T>, filter: string) =>
    filter && listItem.name && listItem.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    || filter && listItem.info && listItem.info.toLowerCase().indexOf(filter.toLowerCase()) > -1

  @Output() select = new EventEmitter<ListItem<T>>()

  filter: string
  selectedId: string

  get filteredList() {
    if (!this.items) {
      return []
    }
    if (!this.filter) {
      return this.items
    }

    return this.items.filter(item =>
      this.filterExpression(item, this.filter)
    )
  }

  handleClick(item: ListItem<T>) {
    this.selectedId = item.id
    this.select.emit(item)
  }
}
