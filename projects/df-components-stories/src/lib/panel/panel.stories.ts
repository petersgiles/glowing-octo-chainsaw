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
  PipesModule
} from "../../../../df-components/src/public_api"
import { getRandomColor } from "../../../../df-components/src/lib/utils/colour"

import { Component, Input } from '@angular/core';

 const OPERATION_PMO_HANDLING_ADVICE = 'pmohandlingadvice'
 const OPERATION_PMC_HANDLING_ADVICE = 'pmchandlingadvice'

const slimExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const readOnlyExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const editExpanded$: BehaviorSubject<boolean> = new BehaviorSubject(true)
const background$: BehaviorSubject<string> = new BehaviorSubject("#000000")
const userReadOperation$: BehaviorSubject<string> = new BehaviorSubject("read")

@Component({
  selector: 'df-view-guard',
  template: `<div [ngSwitch]="operation">
  <div *ngSwitchCase="READ">
      <ng-content select="[operation-type=read]"></ng-content>
  </div>
  <div *ngSwitchCase="WRITE">
      <ng-content select="[operation-type=write]"></ng-content>
  </div>
  <div *ngSwitchCase="HIDE">
      <ng-content select="[operation-type=hide]"></ng-content>
  </div>
  <div *ngSwitchDefault></div>
</div>
`
})
class ViewGuardComponent {
  constructor() {}
  getRight(operations) {
    return operations[OPERATION_PMC_HANDLING_ADVICE]
  }

  @Input()
  operation

  WRITE = 'WRITE'
  READ = 'READ'
  HIDE = 'HIDE'
}

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
    <p>test 10 </p>
    <df-view-guard [operation]="operation">
    <ng-container operation-type="read"><p> read only</p> </ng-container>
    </df-view-guard>
    `,
    component: ViewGuardComponent,
    props: {
      //userOperation$:  userReadOperation$.next("READ"),
      //getRight: val => {console.log('VAL', val)},
    
      
     operation: "pmcAdviceHandler: 'read'"
      
      
    }}))
