import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { DataTableModule } from "../data-table.module"
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import { fruitList } from "./fruit-data"
import { BehaviorSubject } from "rxjs"
import { MdcIconModule } from "@angular-mdc/web"
import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"

const fruits$: BehaviorSubject<any[]> = new BehaviorSubject(fruitList)
const columns = [
  { prop: "common", name: "Common Name" },
  { prop: "botanical", name: "Botanical Name" },
  { prop: "genus", name: "Genus" },
  { prop: "family", name: "Family" }
]

const props = {
  rows$: fruits$,
  columns: columns,
  count: fruitList.length,
  handleEvent: ($event, name) => action(name)($event),
  handleFilter: ($event: any) => {
    const val = $event.target.value.toLowerCase()
    console.log(val)
    filterFruits(val)
    action("onFilter")($event)
  }
}

export const multiFilter = (arr: any[], filters: any) => {
  const filterKeys = Object.keys(filters)
  return arr.filter(eachObj =>
    filterKeys.some(eachKey => {
      if (!filters[eachKey].length) {
        return true // passing an empty filter means that filter is ignored.
      }
      return eachObj[eachKey].toLowerCase().includes(filters[eachKey])
    })
  )
}

export const filterFruits = (expression: string) => {
  if (!expression) {
    fruits$.next(fruitList)
    return
  }
  const filter = {
    common: expression,
    botanical: expression,
    genus: expression,
    family: expression,
    group: expression
  }
  const filtered = multiFilter(fruitList, filter)
  fruits$.next(filtered)
}

storiesOf("Data Table", module)
  .addParameters({ jest: ["data-table.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        NgxDatatableModule,
        BrowserModule,
        MdcIconModule,
        DataTableModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Basic", () => ({
    template: `
    <df-data-table
    [rows]="rows$ | async"
    [columns]="columns"
    [count]="count"
    (onPage)="handleEvent($event, 'onPage')"
    (onSelect)="handleEvent($event, 'onSelect')"
    >
    </df-data-table>
    `,
    props: props
  }))
  .add("Defined page size", () => ({
    template: `
    <df-data-table
    [rows]="rows$ | async"
    [columns]="columns"
    [count]="count"
    limit="5"
    (onPage)="handleEvent($event, 'onPage')"
    (onSelect)="handleEvent($event, 'onSelect')"
    >
    </df-data-table>
    `,
    props: props
  }))
  .add("Delete", () => ({
    template: `
    <df-data-table
    [hasDelete]="true"
    [rows]="rows$ | async"
    [columns]="columns"
    [count]="count"
    (onPage)="handleEvent($event, 'onPage')"
    (onDelete)="handleEvent($event, 'onDelete')"
    >
    </df-data-table>
    `,
    props: props
  }))
  .add("Filter", () => ({
    template: `
    <df-data-table
    [hasFilter]="true"
    [rows]="rows$ | async"
    [columns]="columns"
    [count]="count"
    (onPage)="handleEvent($event, 'onPage')"
    (onFilter)="handleFilter($event)"
    >
    </df-data-table>
    `,
    props: props
  }))
