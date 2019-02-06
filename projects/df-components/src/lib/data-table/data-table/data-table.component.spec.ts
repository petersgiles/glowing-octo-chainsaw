import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DataTableComponent } from "./data-table.component"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import { MdcIconModule } from '@angular-mdc/web';

describe("DataTableComponent", () => {
  let component: DataTableComponent
  let fixture: ComponentFixture<DataTableComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MdcIconModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        BrowserModule
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
