import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"

import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import { BehaviorSubject, of } from "rxjs"
import { MdcIconModule } from "@angular-mdc/web"
import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { TemplateRef, Input, Component, ViewChild, OnInit } from "@angular/core"

import { fruitList } from "./fruit-data"
import { multiFilter } from "../../../../../projects/df-components/src/lib/utils/filters"

import { DataTableModule } from "../../../../../projects/df-components/src/public_api"

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
  handleEvent: ($event, name) => {
    console.log($event)
    action(name)($event)
  },
  handleFilter: ($event: any) => {
    const val = $event.target.value.toLowerCase()
    filterFruits(val)
    action("onFilter")($event)
  }
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

@Component({
  selector: "data-table-template-story",
  template: `
    <df-data-table [rows]="rows" [columns]="columns"> </df-data-table>
    <ng-template #editTmpl let-row="row" let-value="value">
      custom template {{ value }}
    </ng-template>
  `
})
class DataTableTemplateStory implements OnInit {
  @Input()
  public rows

  @ViewChild("editTmpl", { static: true })
  public editTmpl: TemplateRef<any>

  public columns

  ngOnInit(): void {
    this.columns = [
      { prop: "common", name: "Common Name", cellTemplate: this.editTmpl },
      { prop: "botanical", name: "Botanical Name" }
    ]
  }

  constructor() {}
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
      ],
      declarations: [DataTableTemplateStory]
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
  .add("Template Ref", () => ({
    template: `
    <data-table-template-story
    [rows]="rows$ | async"
    >
    </data-table-template-story>
    `,
    props: {
      rows$: fruits$
    }
  }))
  .add("Empty ", () => ({
    template: `
    <df-data-table
    [rows]="rows$ | async"
    [messages]="messages"
    >
    </df-data-table>
    `,
    props: {
      rows$: of([]),
      messages: { emptyMessage: "No data to see here" }
    }
  }))
