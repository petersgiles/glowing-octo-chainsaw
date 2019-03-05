import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimPanelComponent } from './slim-panel.component';

describe('SlimPanelComponent', () => {
  let component: SlimPanelComponent;
  let fixture: ComponentFixture<SlimPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlimPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
