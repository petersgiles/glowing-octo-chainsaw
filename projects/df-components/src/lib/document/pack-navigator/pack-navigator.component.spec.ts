import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { PackNavigatorComponent } from "./pack-navigator.component"
import { CommonModule } from "@angular/common"
import { MdcListModule, MdcIconModule } from "@angular-mdc/web"
import { TreeModule } from 'angular-tree-component';

describe("PackNavigatorComponent", () => {
  let component: PackNavigatorComponent
  let fixture: ComponentFixture<PackNavigatorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MdcIconModule, MdcListModule,
        TreeModule.forRoot()],
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
