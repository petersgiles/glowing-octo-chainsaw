import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MdcIconModule, MdcListModule, MdcTextFieldModule } from '@angular-mdc/web'
import { RefinerComponent } from './refiner.component'

const COMPONENTS = [
  RefinerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    MdcListModule,
    MdcIconModule,
    MdcTextFieldModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class RefinerModule { }
