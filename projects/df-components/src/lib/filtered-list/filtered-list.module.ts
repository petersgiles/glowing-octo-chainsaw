import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MdcListModule, MdcTextFieldModule } from '@angular-mdc/web'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { FilteredListComponent } from './filtered-list.component'

const COMPONENTS = [
  FilteredListComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    MdcListModule,
    MdcTextFieldModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class FilteredListModule { }
