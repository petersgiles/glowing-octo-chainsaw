import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"

import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { BehaviorSubject } from "rxjs"
import { MdcButtonModule, MdcIconModule } from "@angular-mdc/web"
import {
  PanelModule,
  ButtonModule,
  PipesModule,
  ViewGuardComponent
} from "../../../../df-components/src/public_api"
import { getRandomColor } from "../../../../df-components/src/lib/utils/colour"


 const OPERATION_USER = 'user'
 

const slimExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const readOnlyExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const editExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const background$: BehaviorSubject<string> = new BehaviorSubject("#000000")
const userReadOperation$: BehaviorSubject<any> = new BehaviorSubject({user: 'read'})
const userWriteOperation$: BehaviorSubject<any> = new BehaviorSubject({user: 'write'})
const userHideOperation$: BehaviorSubject<any> = new BehaviorSubject({user: 'hide'})



storiesOf("Panel", module)
  .addParameters({ jest: ["expander-panel.component"] })
  .addDecorator(
    moduleMetadata({
     
      imports: [
        BrowserModule,
        PanelModule,
        ButtonModule,
        PipesModule,
        MdcButtonModule,
        MdcIconModule
      ]
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
        <df-button title="Add Item" (onClick)="handleEvent($event, 'Add Item Clicked')" ></df-button>
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
    <ng-container panel-buttons>
      <df-button title="Add Item" [background]="background$ | async" (onClick)="handleEvent($event, 'Add Item Clicked')" ></df-button>
    </ng-container>
    click the titlebar to change the colour the text will adjust to contrast with the background colour ({{background$ | async}})
    </df-expander-panel>
    `,
    props: {
      background$: background$,
      handleToggleExpand() {
        background$.next(getRandomColor())
      },
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
  .add("Title Bar", () => ({
    template: `
    <df-expander-panel title="Title Bar Only" [background]="background$ | async" [expandable]="false" >
    <ng-container panel-buttons>
      <df-button title="Add Item" [background]="background$ | async" (onClick)="handleEvent($event, 'Add Item Clicked')" ></df-button>
    </ng-container>
    no content shown this is just a title bar
    </df-expander-panel>
    `,
    props: {
      background$: background$,
      handleToggleExpand() {
        background$.next(getRandomColor())
      },
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
  .add("Slim Panel", () => ({
    template: `
    <df-slim-panel
    [title]="'slim panel' | titlecase"
    [expandable]="false"
    [expanded]="true"
  >
    <ng-container panel-buttons>
    <a
      class="slim-panel-expander-button"
      mdcIcon
      attr.aria-label="Do Action"
      title="TDo Action"
      (click)="handleEvent($event, 'action')"
      >help</a>
    </ng-container>

    <p>Some Content</p>
  </df-slim-panel> 


  <df-slim-panel
  [title]="'slim panel' | titlecase"
  [expandable]="true"
  [expanded]="expanded$ | async"
>
  <ng-container panel-buttons>
  <a
    class="slim-panel-expander-button"
    mdcIcon
    attr.aria-label="Do Action"
    title="Do Action"
    (click)="handleEvent($event, 'action')"
    >edit</a>
  </ng-container>

  <p>Some Content</p>
</df-slim-panel> 
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
      expanded$: slimExpanded$,
      handleToggleExpand($event) {
        slimExpanded$.next($event)
        action("On Toggle Expand")($event)
      },
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
  .add("View Guard", () => ({
    template: `
    <p>test 21</p>
    <df-view-guard [operation]="getRead(userOperation_R$ | async)">
    <ng-container operation-type="read">
        <div>
            <label for="uname">User name: </label>
            <input type="text" name="uname" value="Fred" readonly>
        </div>
    </ng-container>
    </df-view-guard>
    <df-view-guard [operation]="getWrite(userOperation_W$ | async)">
    <ng-container operation-type="write">
        <div>
            <label for="uname">Choose a user name: </label>
            <input type="text"  name="uname">
        </div>
    </ng-container>
    <p>Hidden applied</p>
    <df-view-guard [operation]="getHidden(userOperation_H$ | async)">
    <ng-container operation-type="hide">
        <div>
            <p>Nothing to see</p>
        </div>
    </ng-container>
    </df-view-guard>
    `,
    component: ViewGuardComponent,
    props: {
     userOperation_R$:  userReadOperation$,
     userOperation_W$:  userWriteOperation$,
     userOperation_H$:  userHideOperation$,
     
     getRead(operations){
       return operations[OPERATION_USER]
     },
     getWrite(operations){
      operations[OPERATION_USER]
    },
    getHidden(operations){
      operations[OPERATION_USER]
    }
    }}))
