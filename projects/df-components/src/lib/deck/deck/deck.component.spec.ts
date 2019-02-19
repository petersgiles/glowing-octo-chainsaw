import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DeckComponent } from "./deck.component"
import { BaseChartDirective } from "ng2-charts/ng2-charts"

describe("DeckComponent", () => {
  let component: DeckComponent
  let fixture: ComponentFixture<DeckComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeckComponent, BaseChartDirective]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
