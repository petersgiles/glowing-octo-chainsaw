import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser'
import { NgxDatatableModule } from "@swimlane/ngx-datatable"

import {
  MdcButtonModule,
  MdcSelectModule,
  MdcRadioModule
} from "@angular-mdc/web"

import { DataTableComponent } from "./data-table/data-table.component"

const COMPONENTS = [
  DataTableComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule, 
    BrowserModule,
    MdcButtonModule,
    MdcSelectModule,
    MdcRadioModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DataTableModule {}
