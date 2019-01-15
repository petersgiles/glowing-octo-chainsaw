import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RefinerModule } from 'src/app/refiner'
import { FruitGroups } from './refiner.data';

storiesOf('Refiner', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RefinerModule
      ]
    })
  )
  .add('Multi', () => ({
    template: `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <df-refiner [refinerGroups]="refinerGroups"></df-refiner>
        </div>
      </div>
    </div>
  `,
    props: {
      refinerGroups: FruitGroups
    }
  })
  )
