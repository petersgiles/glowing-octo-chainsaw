# DfDataTable

## API

Selector: df-data-table  
Exported As: DataTableComponent

### Properties

| Name               | Description                                  |
| ------------------ | -------------------------------------------- |
| hasDelete: boolean | add a delete action column to each table row |
| hasFilter: boolean | add a filter inputbox above the table        |
| rows: any[]        | the table rows                               |
| columns: any[]     | the table columns                            |
| count: number      | the table row total count                    |

### Events

| Name             | Description                 |
| ---------------- | --------------------------- |
| onPage: Page     | emits on Page change        |
| onDelete: any    | emits row data              |
| onSelect: any    | emits row data              |
| onFilter: string | emits debounced filter text |

## Examples

`import { DataTableModule } from '@df/components'`

### Basic

```html
<df-data-table
  [rows]="rows$ | async"
  [columns]="columns"
  [count]="count"
  (onPage)="handleEvent($event, 'onPage')"
  (onSelect)="handleEvent($event, 'onSelect')"
>
</df-data-table>
```

### Delete

```html
<df-data-table
  [hasDelete]="true"
  [rows]="rows$ | async"
  [columns]="columns"
  [count]="count"
  (onPage)="handleEvent($event, 'onPage')"
  (onDelete)="handleEvent($event, 'onDelete')"
>
</df-data-table>
```

### Filtered

```html
<df-data-table
  [hasFilter]="true"
  [rows]="rows$ | async"
  [columns]="columns"
  [count]="count"
  (onPage)="handleEvent($event, 'onPage')"
  (onFilter)="handleFilter($event)"
>
</df-data-table>
```
