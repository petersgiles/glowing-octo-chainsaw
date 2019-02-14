import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"
import { PanelModule } from "../panel.module"
import { BehaviorSubject } from "rxjs"
import { MdcButtonModule, MdcIconModule } from "@angular-mdc/web"
import { getRandomColor } from '../../utils/colour';

const readOnlyExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const editExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const background$: BehaviorSubject<string> = new BehaviorSubject('#000000')


storiesOf("Panel", module)
  .addParameters({ jest: ["expander-panel.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, PanelModule, MdcButtonModule, MdcIconModule]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Read Only", () => ({
    template: `
    <df-expander-panel title="read me expander panel" [expanded]="expanded$ | async" (onToggleExpand)="handleToggleExpand($event)">
      include content inside 'df-expander-panel' and it will be available as read only content
      <div panel-content-edit>Should not see edit content</div>
    </df-expander-panel>
    `,
    props: {
      expanded$: readOnlyExpanded$,
      handleToggleExpand($event) {
        readOnlyExpanded$.next($event)
        action("On Toggle Expand")($event)
      }
    }
  }))
  .add("Edit", () => ({
    template: `
    <df-expander-panel title="edit me expander panel" [expanded]="expanded$ | async" (onToggleExpand)="handleToggleExpand($event)" [readOnly]="false">
      Should NOT see readonly content
      <ng-container panel-content-edit>Editable content is placed inside a container with 'panel-content-edit' and it will be available when readOnly is false</ng-container>
    </df-expander-panel>
    `,
    props: {
      expanded$: editExpanded$,
      handleToggleExpand($event) {
        editExpanded$.next($event)
        action("On Toggle Expand")($event)
      }
    }
  }))
  .add("Title Bar Buttons", () => ({
    template: `
    <df-expander-panel title="edit me expander panel" [expanded]="expanded$ | async" (onToggleExpand)="handleToggleExpand($event)">
      <ng-container panel-buttons>
      <button class="story-button" attr.aria-label="Add Item" title="Add Item" (click)="handleEvent($event, 'Add Item Clicked')" mdc-button dense><mdc-icon>add</mdc-icon>Add&nbsp;Item</button>
      </ng-container>
      Buttons can be added to the title bar by including them in a container with the 'panel-buttons' attribute
    </df-expander-panel>
    `,
    styles: [
      `
      .story-button {
        min-width: 120px;
        padding-left: 4px;
      }
    `
    ],
    props: {
      expanded$: editExpanded$,
      handleToggleExpand($event) {
        editExpanded$.next($event)
        action("On Toggle Expand")($event)
      },
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
  .add("Background Colour", () => ({
    template: `
    <df-expander-panel title="background colour panel" [background]="background$ | async" (onToggleExpand)="handleToggleExpand($event)" expanded="true" >
    click the titlebar to change the colour the text will adjust to contrast with the background colour ({{background$ | async}})
    </df-expander-panel>
    `,
    props: {
      background$: background$,
      handleToggleExpand() {
        background$.next(getRandomColor())
      }
    }
  }))
  