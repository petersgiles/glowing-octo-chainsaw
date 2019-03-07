import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { MdcListModule } from "@angular-mdc/web"
import { RefinerModule } from '../../../../../projects/df-components/src/public_api';

storiesOf("Refiner", module)
  .addDecorator(
    moduleMetadata({
      imports: [MdcListModule, RefinerModule]
    })
  )
  .addDecorator(withLinks)
  .add("Usages", () => ({
    template: `
    <mdc-list>
      <mdc-list-item data-sb-kind="Filtered List" data-sb-story="Refined">
        See: Refined List
      </mdc-list-item>
    </mdc-list>
    `
  }))
