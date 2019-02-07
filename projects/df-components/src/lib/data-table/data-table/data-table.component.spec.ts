import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DataTableComponent } from "./data-table.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import {
  MdcIconModule,
  MdcButtonModule,
  MdcSelectModule,
  MdcRadioModule
} from "@angular-mdc/web"
import { CommonModule } from '@angular/common';

describe("DataTableComponent", () => {
  let component: DataTableComponent
  let fixture: ComponentFixture<DataTableComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule, 
        BrowserModule,
        MdcButtonModule,
        MdcIconModule,
        MdcSelectModule,
        MdcRadioModule
      ],
      declarations: [DataTableComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
