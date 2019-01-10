import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RefinerModule } from 'src/app/refiner'
import { ComplexFruitCategories, SimpleFruitCategories } from './refiner.data';

storiesOf('Refiner', module)
.addDecorator(
  moduleMetadata({
    imports: [
      RefinerModule
    ]
  })
)
.add('Simple', () => {
  return ({
    template: `
    <df-refiner [refinerGroups]="refinerGroups"><df-refiner>
  `,
    props: {
      refinerGroups: SimpleFruitCategories
    }
  })
})
.add('Multi', () => {
  return ({
    template: `
    <df-refiner [refinerGroups]="refinerGroups"><df-refiner>
  `,
    props: {
      refinerGroups: ComplexFruitCategories
    }
  })
})
