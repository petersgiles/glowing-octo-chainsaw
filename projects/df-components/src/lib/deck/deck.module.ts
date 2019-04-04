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
  MdcTextFieldModule,
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
    MdcTextFieldModule,
    NgxWigModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DeckModule {}
