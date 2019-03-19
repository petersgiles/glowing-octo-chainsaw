import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { fruitList } from "./filtered-list.data"
import { RouterModule } from "@angular/router"
import { APP_BASE_HREF } from "@angular/common"

import { BehaviorSubject } from "rxjs"
import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import {
  ListItem,
  FilteredListModule,
  RefinerModule,
  RefinerGroup
} from "../../../../../projects/df-components/src/public_api"
import { fruitGroups } from "../refiner/refiner.data"

const fruits$: BehaviorSubject<ListItem<any>[]> = new BehaviorSubject(fruitList)

function filterFruits(expression: string) {
  if (!expression) {
    fruits$.next(fruitList)
    return
  }
  const filtered = fruitList.filter(fruit => eval(expression))
  fruits$.next(filtered)
}

storiesOf("Filtered List", module)
  .addParameters({ jest: ["filtered-list"] })
  .addDecorator(
    moduleMetadata({
      imports: [
        FilteredListModule,
        RefinerModule,
        RouterModule.forRoot([
          {
            path: "iframe.html",
            redirectTo: ""
          }
        ])
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
    })
  )
  .addDecorator(withReadme(Readme))
  .add("Simple", () => ({
    template: `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <df-filtered-list label="Filter" [items]="fruits" (select)="handleSelectFruit($event)"></df-filtered-list>
        </div>
      </div>
    </div>
  `,
    props: {
      fruits: fruitList,
      handleSelectFruit: (item: ListItem<any>) => action("Fruit")(item.title)
    }
  }))
  .add("Refined", () => ({
    template: `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <df-refiner [refinerGroups]="refinerGroups" (refine)="handleSelectRefiner($event)"></df-refiner>
        </div>
        <div class="mdc-layout-grid__cell">
          <df-filtered-list label="Filter" [items]="fruits$ | async" (select)="handleSelectFruit($event)"></df-filtered-list>
        </div>
      </div>
    </div>
    `,
    props: {
      fruits$,
      refinerGroups: fruitGroups,
      handleSelectFruit: (item: ListItem<any>) => action("Fruit")(item.title),
      handleSelectRefiner: (refinerGroups: RefinerGroup[]) => {
        const expression = refinerGroups
          .map(group => {
            switch (group.title) {
              case "Genera":
                return `(${group.refiners
                  .map(
                    refiner => `fruit.info.split(' ')[0] === '${refiner.title}'`
                  )
                  .join(" || ")})`
              case "Starts with":
                return `(${group.refiners
                  .map(
                    refiner => `fruit.title.substr(0, 1) === '${refiner.title}'`
                  )
                  .join(" || ")})`
            }
          })
          .join(" && ")
        action("Selected refiners")(expression, refinerGroups)
        filterFruits(expression)
      }
    }
  }))
