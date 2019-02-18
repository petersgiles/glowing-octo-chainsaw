import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { MdcButtonModule, MdcIconModule } from '@angular-mdc/web';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './button/button.component';

const COMPONENTS = [
  ButtonComponent
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    MdcButtonModule, 
    MdcIconModule, 
    PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ButtonModule { }
