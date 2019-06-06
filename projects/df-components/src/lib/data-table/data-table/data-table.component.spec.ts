import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DataTableComponent } from "./data-table.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import {
  NgxDatatableModule,
  DatatableComponent as NgxDatatableComponent
} from "@swimlane/ngx-datatable"
import { BrowserModule, By } from "@angular/platform-browser"
import {
  MdcIconModule,
  MdcButtonModule,
  MdcSelectModule,
  MdcRadioModule
} from "@angular-mdc/web"
import { CommonModule } from "@angular/common"
import { DebugElement } from "@angular/core"

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

    this.dataTableComponent = fixture.debugElement.query(
      By.directive(NgxDatatableComponent)
    )
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
  it("should not vertical scroll when limit is applied", () => {
    component.limit = 5
    fixture.detectChanges()
    expect(this.dataTableComponent.classes["scroll-vertical"]).toBe(false)
  })
  // it("should vertical scroll when limit is not set", () => {
  //   component.limit = undefined
  //   fixture.detectChanges()
  //   expect(this.dataTableComponent.classes["scroll-vertical"]).toBe(true)
  // })
  // it("should vertical scroll when limit is set to 0 or less", () => {
  //   component.limit = 0
  //   fixture.detectChanges()
  //   expect(this.dataTableComponent.classes["scroll-vertical"]).toBe(true)
  // })
})
