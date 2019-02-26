import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaTagsComponent } from './mega-tags.component';

describe('MegaTagsComponent', () => {
  let component: MegaTagsComponent;
  let fixture: ComponentFixture<MegaTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
