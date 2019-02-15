import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStandardComponent } from './card-standard.component';

describe('CardStandardComponent', () => {
  let component: CardStandardComponent;
  let fixture: ComponentFixture<CardStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
