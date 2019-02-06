import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { AvatarComponent } from "./avatar.component"
import { CommonModule } from "@angular/common"

describe("AvatarComponent", () => {
  let component: AvatarComponent
  let fixture: ComponentFixture<AvatarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        AvatarComponent
      ]

    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
