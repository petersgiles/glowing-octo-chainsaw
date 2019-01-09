import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RefinerModule, RefinerGroup } from 'src/app/refiner'
import { SimpleRefinerGroups } from './refiner.data';

storiesOf('Refiners', module)
.addDecorator(
  moduleMetadata({
    imports: [
      RefinerModule
    ]
  })
)
.add('Simple refiner', () => {
  return ({
    template: `
    <df-refiner [refinerGroups]="refinerGroups" (onClear)="onClear($event)"><df-refiner>
  `,
    props: {
      refinerGroups: SimpleRefinerGroups,
      onClear: () => action("Cleared!")("wat?")
    }
  })
});
