import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { StatusPickerComponent } from "./status-picker.component"
import { CommonModule } from "@angular/common"
import { MdcChipsModule } from "@angular-mdc/web"

describe("StatusPickerComponent", () => {
  let component: StatusPickerComponent
  let fixture: ComponentFixture<StatusPickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MdcChipsModule],
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
