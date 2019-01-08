import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { FilterModule } from 'src/app/filter/filter.module';
import { RefinerGroup } from 'src/app/filter/filter.model';

storiesOf('Filters', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FilterModule
      ]
    })
  )
  .add('Single list of filters', () => {
    return ({
      template: `
      <app-filter [refinerGroups]="refinerGroups" (onClear)="onClear($event)"><app-filter>
    `,
      props: {
        refinerGroups: [
          {
            id: 1,
            title: "Refiner Group A",
            expanded: false,
            children: [
              {
                id: 11,
                title: "Refiner #1",
                groupId: 1,
                selected: false
              }
            ]
          }
        ] as RefinerGroup[],
        onClear: () => action("Cleared!")("wat?")
      }
    })
  });

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
