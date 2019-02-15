import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DeckComponent } from "./deck.component"
import { CardStandardComponent } from "../card-standard/card-standard.component"
import { CardAudioComponent } from "../card-audio/card-audio.component"
import { CardChartComponent } from "../card-chart/card-chart.component"
import { CardImageComponent } from "../card-image/card-image.component"
import { CardMarkdownComponent } from "../card-markdown/card-markdown.component"
import { CardParentComponent } from "../card-parent/card-parent.component"

describe("DeckComponent", () => {
  let component: DeckComponent
  let fixture: ComponentFixture<DeckComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeckComponent,
        CardAudioComponent,
        CardChartComponent,
        CardImageComponent,
        CardMarkdownComponent,
        CardParentComponent,
        CardStandardComponent
      ]
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
