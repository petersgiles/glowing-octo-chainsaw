## df-filtered-list

`import { FilteredListModule } from 'df-components'`

Displays a list of items that can be selected and filtered. Items can route or emit an event. Filter expression can be overridden.

## Inputs

### items

List of items to display. Providing a 'link' property creates a [routerLink] for the item. Optional entity can be provided to be used in conjuction with custom filtering expressions if needed.

`@Input() items: ListItem<T>[]`

```
export interface ListItem<T> {
    id: string
    title: string
    entity?: T
    link?: string
    info?: string
}
```

### label

Label for the filter component

`@Input() label: string`

### filterExpression

Custom filter expression. Can be used in conjunction with the entity propety if required.

`@Input() filterExpression: (listItem: ListItem<T>, filter: string) => boolean`

## Outputs

Returns the selected ListItem object

`@Output() select: EventEmitter<ListItem<T>>()`
