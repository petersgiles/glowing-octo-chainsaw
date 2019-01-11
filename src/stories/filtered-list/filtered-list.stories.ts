import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FruitList } from './filtered-list.data'
import { FilteredListModule, ListItem } from 'src/app/filtered-list';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

storiesOf('Filtered List', module)
.addDecorator(
  moduleMetadata({
    imports: [
      FilteredListModule,
      RouterModule.forRoot([{
          path: 'iframe.html',
          redirectTo: ''
      }])
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
    ]
  })
)
.add('Simple', () => {
  return ({
    template: `
    <df-filtered-list label="Filter" [items]="fruits" (select)="handleSelectFruit($event)"></df-filtered-list>
  `,
    props: {
      fruits: FruitList,
      handleSelectFruit: (item: ListItem<any>) => action("Fruit")(item.title)
    }
  })
});
