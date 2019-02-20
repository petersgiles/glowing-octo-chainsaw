import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"

import { BehaviorSubject, Observable } from "rxjs"
import { MdcChipsModule, MdcIconModule, MdcListModule } from "@angular-mdc/web"
import { ButtonModule } from "../../button"
import { DocumentModule } from "../document.module"
import { withLatestFrom, map } from "rxjs/operators"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import { toTree, sortBy } from "../../utils/array-to-tree"

const navigatorData: NavigatorTreeNode[] = [
  {
    id: "ddf2e782-c890-5df3-8169-d94c099e60c1",
    parent: null,
    caption: "qui in est",
    meta: "last updated 1/1/2019",
    colour: "GoldenRod",
    order: 17,
    active: false,
    expanded: true
  },
  {
    id: "d28dd1d7-7a03-53e2-8620-7cc9801fb091",
    parent: "ddf2e782-c890-5df3-8169-d94c099e60c1",
    caption: "fugit sint officia",
    meta: "3 new",
    colour: "GoldenRod",
    order: 65,
    active: false,
    expanded: true
  },
  {
    id: "6e163c94-eca8-54bf-9857-95988c2742c6",
    parent: "ddf2e782-c890-5df3-8169-d94c099e60c1",
    caption: "exercitationem illum voluptas",
    meta: "",
    colour: "GoldenRod",
    order: 54,
    active: false,
    expanded: true
  },
  {
    id: "b47463dc-63b7-5feb-b006-8558b6e67a72",
    parent: "d28dd1d7-7a03-53e2-8620-7cc9801fb091",
    caption: "aut eveniet voluptatem",
    meta: "last updated 1/1/2019",
    colour: "GoldenRod",
    order: 41,
    active: false,
    expanded: true
  },
  {
    id: "b99c94cc-4c87-51c2-ad8b-71966991116b",
    parent: "6e163c94-eca8-54bf-9857-95988c2742c6",
    caption: "quisquam natus enim",
    meta: "last updated 1/1/2019",
    colour: "GoldenRod",
    order: 4,
    active: false,
    expanded: true
  },
  {
    id: "329ce8ed-5e8c-52aa-984a-e3615463d392",
    parent: null,
    caption: "quo iure similique",
    meta: "last updated 1/1/2019",
    colour: "Crimson",
    order: 43,
    active: false,
    expanded: true
  },
  {
    id: "6b7563f1-8e30-5d96-8495-9d99c3cf3fab",
    parent: "329ce8ed-5e8c-52aa-984a-e3615463d392",
    caption: "eos omnis nesciunt",
    meta: "last updated 1/1/2019",
    colour: "Crimson",
    order: 23,
    active: false,
    expanded: true
  },
  {
    id: "e6976877-f03d-5a39-a8d0-3baee5365476",
    parent: "329ce8ed-5e8c-52aa-984a-e3615463d392",
    caption: "quibusdam excepturi pariatur",
    meta: "last updated 1/1/2019",
    colour: "Crimson",
    order: 20,
    active: false,
    expanded: true
  },
  {
    id: "fec1cadd-0fff-599c-b1a4-49b7349a4d57",
    parent: "e6976877-f03d-5a39-a8d0-3baee5365476",
    caption: "quia sunt facilis",
    meta: "last updated 1/1/2019",
    colour: "Crimson",
    order: 39,
    active: false,
    expanded: true
  },
  {
    id: "e9861dad-d68e-5aa6-9ee9-96eb46534a4a",
    parent: "e6976877-f03d-5a39-a8d0-3baee5365476",
    caption: "ipsam facilis totam",
    meta: "last updated 1/1/2019",
    colour: "Crimson",
    order: 10,
    active: false,
    expanded: true
  }
]

const navigatorTree$: BehaviorSubject<
  NavigatorTreeNode[]
> = new BehaviorSubject(
  toTree(navigatorData.sort(sortBy('order')), {
    id: "id",
    parentId: "parent",
    children: "children",
    level: "level"
  })
)

const props = {
  navigatorTree$: navigatorTree$,
  handleEvent: ($event, name) => {
    action(name)($event)
  },
  handleAction: node => {
      if(node){
          if(node.children){
            action("Toggle Action")(node)
          } else {
            action("Navigate Action")(node)
          }
      }
    
  }
}

storiesOf("Pack Navigator", module)
  .addParameters({ jest: ["pack-navigator.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        DocumentModule,
        MdcIconModule,
        MdcListModule,
        MdcChipsModule,
        ButtonModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Navigate", () => ({
    template: `
    <df-pack-navigator [list]="navigatorTree$" (onAction)="handleAction($event)"></df-pack-navigator>
    `,
    props: props
  }))
