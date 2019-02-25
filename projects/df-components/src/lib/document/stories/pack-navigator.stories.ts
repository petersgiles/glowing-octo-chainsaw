import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../pack-navigator/README.md"

import { BehaviorSubject, Observable } from "rxjs"
import { MdcChipsModule, MdcIconModule, MdcListModule } from "@angular-mdc/web"
import { ButtonModule } from "../../button"
import { DocumentModule } from "../document.module"
import { withLatestFrom, map } from "rxjs/operators"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import { toTree, sortBy } from "../../utils/array-to-tree"

import { navigatorData } from "../../../.data/deck-data"

const navData$: BehaviorSubject<NavigatorTreeNode[]> = new BehaviorSubject(
  navigatorData
)

const navigatorTree$: Observable<NavigatorTreeNode[]> = navData$.pipe(
  map(navigatorData =>
    toTree(navigatorData.sort(sortBy("order")), {
      id: "id",
      parentId: "parent",
      children: "children",
      level: "level"
    })
  )
)

navigatorData

const props = {
  nodes$: navigatorTree$,
  handleEvent: ($event, name) => {
    action(name)($event)
  },
  handleAction: node => {
    action("Action")(node)
  },
  handleSelect: node => {
    action("Select")(node)
    const navData = navigatorData.map(n => ({ ...n, active: false }))
    const found = { ...navData.find(n => n.id === node.id) }
    found.active = true
    const list = [
      ...navData.filter(n => n.id !== node.id),
      found
    ]
   
    navData$.next(list)
  }
}

// public anyChildActive(node: any): boolean {
//   // tslint:disable-next-line:no-console
//   console.log("getNodeColour =>", node)

//   if (!(node && node.children && node.children.length > 0)) return false
//   if (node.children.some(c => c.active)) return true

//   const nodesWithChildren = node.children
//     .filter(c => node.children && node.children.length > 0)
//     .reduce((acc: boolean[], n: any) => {
//       acc.push(this.anyChildActive(n))
//       return acc
//     }, [])

//   return nodesWithChildren.some(n => n)
// }

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
  .add("Navigation", () => ({
    template: `
    <df-pack-navigator [nodes]="nodes$ | async" (onSelect)="handleSelect($event)" (onMoveNode)="handleEvent($event, 'Move')"></df-pack-navigator>
    `,
    props: props
  }))
