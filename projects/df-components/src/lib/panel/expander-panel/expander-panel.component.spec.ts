import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanderPanelComponent } from './expander-panel.component';

describe('ExpanderPanelComponent', () => {
  let component: ExpanderPanelComponent;
  let fixture: ComponentFixture<ExpanderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanderPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
