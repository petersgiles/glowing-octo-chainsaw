import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FruitList } from './filtered-list.data'
import { FilteredListModule, ListItem } from 'src/app/filtered-list';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FruitGroups } from '../refiner/refiner.data';
import { RefinerModule, RefinerGroup } from 'src/app/refiner';

const fruits = FruitList

storiesOf('Filtered List', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FilteredListModule,
        RefinerModule,
        RouterModule.forRoot([{
          path: 'iframe.html',
          redirectTo: ''
        }])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
  )
  .add('Simple', () => ({
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
      fruits: fruits,
      handleSelectFruit: (item: ListItem<any>) => action("Fruit")(item.title)
    }
  })
  )
  .add('Refined', () => ({
    template: `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          <df-refiner [refinerGroups]="refinerGroups" (refine)="handleSelectRefiner($event)"></df-refiner>
        </div>
        <div class="mdc-layout-grid__cell">
          <df-filtered-list label="Filter" [items]="fruits" (select)="handleSelectFruit($event)"></df-filtered-list>
        </div>
      </div>
    </div>
    `,
    props: {
      fruits: fruits,
      refinerGroups: FruitGroups,
      handleSelectFruit: (item: ListItem<any>) => action("Fruit")(item.title),
      handleSelectRefiner: (refinerGroups: RefinerGroup[]) => action("Selected refiners")(refinerGroups)
    }
  }))
