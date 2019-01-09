import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefinerComponent } from './refiner.component';
import { MdcListModule, MdcIconModule, MdcTextFieldModule } from '@angular-mdc/web';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
    RefinerComponent
]

@NgModule({
  imports: [
      CommonModule,
      MdcListModule,
      MdcIconModule,
      MdcTextFieldModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class RefinerModule { }