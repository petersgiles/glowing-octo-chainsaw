import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { MegaTagChooserComponent } from "./mega-tag-chooser.component"
import { MegaTagsService } from ".."
import { TestMegaTagsService } from "../test-mega-tags.service"
import { MdcChipsModule, MdcIconModule } from "@angular-mdc/web"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { PanelModule } from "../../panel"

describe("MegaTagChooserComponent", () => {
  let component: MegaTagChooserComponent
  let fixture: ComponentFixture<MegaTagChooserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        PanelModule,
        MdcIconModule,
        MdcChipsModule
      ],
      declarations: [MegaTagChooserComponent],
      providers: [{ provide: MegaTagsService, useClass: TestMegaTagsService }]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaTagChooserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
