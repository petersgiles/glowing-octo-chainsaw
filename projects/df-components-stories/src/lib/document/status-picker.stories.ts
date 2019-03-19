import { storiesOf, moduleMetadata } from "@storybook/angular"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./status-picker.md"

import { BehaviorSubject, Observable } from "rxjs"
import { MdcChipsModule, MdcListModule } from "@angular-mdc/web"

import { withLatestFrom, map } from "rxjs/operators"

import {
  DocumentModule,
  ButtonModule,
  DocumentStatus
} from "../../../../../projects/df-components/src/public_api"
import { statuslist } from "./data"
import { StatusPickerStoryComponent } from "./status-picker-story/status-picker-story"

const documentStatus$: BehaviorSubject<DocumentStatus> = new BehaviorSubject(
  null
)
const documentStatusList$: BehaviorSubject<
  DocumentStatus[]
> = new BehaviorSubject(statuslist)

const statuses$: Observable<DocumentStatus[]> = documentStatus$.pipe(
  withLatestFrom(documentStatusList$),
  map(([status, list]) =>
    list
      .map(c => {
        const s = {
          ...c,
          active: c.id == (status || { id: null }).id
        }

        return s
      })
      .sort((a, b) => {
        return Number(a.order) < Number(b.order) ? -1 : 1
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
      declarations: [StatusPickerStoryComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
  .add("Form", () => ({
    template: `
    <df-status-picker-story></df-status-picker-story>
    `,
    props: props
  }))
