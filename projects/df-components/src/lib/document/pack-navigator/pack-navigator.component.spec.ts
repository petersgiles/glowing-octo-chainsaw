import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { PackNavigatorComponent } from "./pack-navigator.component"
import { CommonModule } from "@angular/common"
import { MdcListModule, MdcIconModule, MdcChipsModule, MdcTextFieldModule } from "@angular-mdc/web"
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';

describe("PackNavigatorComponent", () => {
  let component: PackNavigatorComponent
  let fixture: ComponentFixture<PackNavigatorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [    CommonModule,
        FormsModule,
        MdcIconModule,
        MdcListModule,
        MdcChipsModule,
        MdcTextFieldModule,
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
