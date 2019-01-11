import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteredListComponent } from './filtered-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MdcListModule, MdcTextFieldModule } from '@angular-mdc/web';

const COMPONENTS = [
    FilteredListComponent
]

@NgModule({
  imports: [
      CommonModule,
      FormsModule,      
      RouterModule.forChild([]),
      MdcListModule,
      MdcTextFieldModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FilteredListModule { }