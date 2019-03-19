import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { action } from "@storybook/addon-actions"
import { MdcListModule } from "@angular-mdc/web"
import {
  RefinerModule,
  RefinerGroup
} from "../../../../../projects/df-components/src/public_api"

storiesOf("Refiner", module)
  .addDecorator(
    moduleMetadata({
      imports: [MdcListModule, RefinerModule]
    })
  )
  .addDecorator(withLinks)
  .add("Simple", () => ({
    template: `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <df-refiner [refinerGroups]="refinerGroups" (refine)="handleSelectRefiner($event)"></df-refiner>
        </div>
      </div>
    </div>
    `,
    props: {
      refinerGroups: refinerGroups,
      handleSelectRefiner: (refinerGroups: RefinerGroup[]) =>
        action("refinedGroups")(refinerGroups)
    }
  }))
  .add("Usages", () => ({
    template: `
    <mdc-list>
      <mdc-list-item data-sb-kind="Filtered List" data-sb-story="Refined">
        See: Refined List
      </mdc-list-item>
    </mdc-list>
    `
  }))

const refinerGroups: RefinerGroup[] = [
  {
    id: "1",
    title: "Group 1",
    refiners: [
      {
        id: "11",
        title: "Refiner one"
      },
      {
        id: "12",
        title:
          "So much text why would anyone ever write this much text in here oh well let's make sure it is all visible"
      },
      {
        id: "13",
        title: "Refiner three"
      }
    ]
  },
  {
    id: "2",
    title: "Group 2",
    refiners: [
      {
        id: "21",
        title: "Another refiner"
      },
      {
        id: "22",
        title: "And another one"
      }
    ]
  }
]
