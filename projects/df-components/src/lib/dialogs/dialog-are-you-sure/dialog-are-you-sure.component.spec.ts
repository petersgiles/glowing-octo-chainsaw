import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { DialogAreYouSureComponent } from "./dialog-are-you-sure.component"
import { CommonModule } from "@angular/common"
import { MdcButtonModule, MdcDialogModule, MdcDialogRef, OverlayRef, MdcDialogPortal } from "@angular-mdc/web"

describe("DialogAreYouSureComponent", () => {
  let component: DialogAreYouSureComponent
  let fixture: ComponentFixture<DialogAreYouSureComponent>
  const mockPortalInstance = new MdcDialogPortal(null,null, null)
  const mockDialogRef = new MdcDialogRef(new OverlayRef(null,null,null,null,null,null), mockPortalInstance);
  mockDialogRef.componentInstance = new DialogAreYouSureComponent(null)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAreYouSureComponent],
      imports: [CommonModule, MdcButtonModule, MdcDialogModule],
      providers:[
        { provide: MdcDialogRef, useValue: mockDialogRef }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAreYouSureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
