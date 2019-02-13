import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { AvatarComponent } from "./avatar.component"
import { CommonModule } from "@angular/common"
import { DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"

describe("AvatarComponent", () => {
  let component: AvatarComponent
  let fixture: ComponentFixture<AvatarComponent>
  let initials: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AvatarComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    initials = fixture.debugElement.query(By.css(".avatar span"))
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("The initials match the name", () => {
    component.name = "Test User"
    fixture.detectChanges()
    expect(component.letter).toBe("TU")
    expect(initials.nativeElement.innerHTML).toBe("TU")
  })

  it("Initials work with only one name", () => {
    component.name = "OneNameMan"
    fixture.detectChanges()
    expect(component.letter).toBe("O")
    expect(initials.nativeElement.innerHTML).toBe("O")
  })

  it("Initials are derived from first three names", () => {
    component.name = "So Very Really Extremely Many Names"
    fixture.detectChanges()
    expect(component.letter).toBe("SVR")
    expect(initials.nativeElement.innerHTML).toBe("SVR")
  })
})
