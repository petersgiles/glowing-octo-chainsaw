import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaTagChooserComponent } from './mega-tag-chooser.component';

describe('MegaTagChooserComponent', () => {
  let component: MegaTagChooserComponent;
  let fixture: ComponentFixture<MegaTagChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaTagChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaTagChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
