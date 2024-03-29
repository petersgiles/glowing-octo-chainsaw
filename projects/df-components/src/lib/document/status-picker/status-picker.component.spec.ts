import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { CommonModule } from "@angular/common"
import { MdcIconModule } from "@angular-mdc/web"

import { StatusPickerComponent } from "./status-picker.component"

describe("StatusPickerComponent", () => {
  let component: StatusPickerComponent
  let fixture: ComponentFixture<StatusPickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MdcIconModule],
      declarations: [StatusPickerComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
