import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "./status-picker.md"

import { BehaviorSubject, Observable } from "rxjs"
import {
  MdcChipsModule, MdcListModule
} from "@angular-mdc/web"

import { withLatestFrom, map } from 'rxjs/operators';

import { DocumentModule, ButtonModule, DocumentStatus } from '../../../../../projects/df-components/src/public_api';

const statuslist: DocumentStatus[] = [
  {
    id: "1",
    icon: "content_copy",
    caption: "In Draft",
    colour: "Pink",
    order: 1
  },
  {
    id: "2",
    icon: "how_to_reg",
    caption: "Ready",
    colour: "GhostWhite",
    order: 2
  },
  {
    id: "3",
    icon: "face",
    caption: "Cancelled",
    colour: "Crimson",
    order: 3
  }
]

const documentStatus$: BehaviorSubject<DocumentStatus> = new BehaviorSubject(
  null
)

const documentStatusList$: BehaviorSubject<
  DocumentStatus[]
> = new BehaviorSubject(statuslist)


const statuses$: Observable<DocumentStatus[]> = documentStatus$.pipe(
  withLatestFrom(documentStatusList$),
  map(([status, list]) =>
  list.map(c => {

      const s = {
        ...c,
        active: c.id == (status || {id:null}).id
      }

      return s
    }).sort((a, b) => {
      return Number(a.order) < Number(b.order) ? -1 : 1;
   })
  )
)

const props = {
  documentStatus$: documentStatus$,
  documentStatusList$: statuses$,
  handleEvent: ($event, name) => {
    action(name)($event)
  },
  handleAction: $event => {

    documentStatus$.next($event)

    action("Button Action")($event)
  }
}

storiesOf("Status Picker", module)
  .addParameters({ jest: ["status-picker.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        DocumentModule,
        MdcListModule,
        MdcChipsModule,
        ButtonModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("ReadOnly", () => ({
    template: `
    <df-status-picker 
      [statuses]="documentStatusList$ | async" 
      >
    </df-status-picker>
    `,
    props: props
  }))