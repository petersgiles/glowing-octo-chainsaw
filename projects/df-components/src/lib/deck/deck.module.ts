import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DeckComponent } from "./deck/deck.component"
import { ChartsModule } from "ng2-charts/ng2-charts"
import { NgSelectModule } from '@ng-select/ng-select'
import{ReactiveFormsModule}from "@angular/forms"
import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcFormFieldModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcRippleModule,
} from "@angular-mdc/web"

import { NgxWigModule } from "ngx-wig"
const COMPONENTS = [DeckComponent]

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    NgSelectModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcCardModule,
    MdcFormFieldModule,
    MdcListModule,
    MdcTextFieldModule,
    NgxWigModule,
    ReactiveFormsModule,
    MdcRippleModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DeckModule {}
