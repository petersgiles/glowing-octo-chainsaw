import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefinerComponent } from './refiner.component';
import { MdcListModule, MdcIconModule, MdcTextFieldModule } from '@angular-mdc/web';

const COMPONENTS = [
    RefinerComponent
]

@NgModule({
  imports: [
      CommonModule,
      MdcListModule,
      MdcIconModule,
      MdcTextFieldModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class RefinerModule { }