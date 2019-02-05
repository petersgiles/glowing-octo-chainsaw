import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { DataTableModule } from "../data-table.module"
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import { fruitList } from './fruit-data';
import { Page } from '../models/data-table-model';

storiesOf("Data Table", module)
  .addDecorator(
    moduleMetadata({
      imports: [NgxDatatableModule, BrowserModule, DataTableModule]
    })
  )
  .addDecorator(withLinks)
  .add("Usages", () => ({
    template: `
    <df-data-table
    [rows]="rows"
    [columns]="columns"
    [count]="count"
    [offset]="offset"
    (page)="handlePage($event)"
    >
    </df-data-table>
    `,
    props: {
      rows: fruitList,
      columns: [
        { prop: 'common', name: 'Common Name' },
        { prop: 'botanical', name: 'Botanical Name' },
        { prop: 'genus',  name: 'Genus' },
        { prop: 'family',  name: 'Family' }
      ],
      count: fruitList.length,
      handlePage: ($event: Page) => action("Page")($event)
    }
  }))