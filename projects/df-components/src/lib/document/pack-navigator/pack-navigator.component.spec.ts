import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { PackNavigatorComponent } from "./pack-navigator.component"
import { CommonModule } from "@angular/common"
import { MdcListModule, MdcIconModule } from "@angular-mdc/web"

describe("PackNavigatorComponent", () => {
  let component: PackNavigatorComponent
  let fixture: ComponentFixture<PackNavigatorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MdcIconModule, MdcListModule],
      declarations: [PackNavigatorComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PackNavigatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
