import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarkdownComponent } from './card-markdown.component';

describe('CardMarkdownComponent', () => {
  let component: CardMarkdownComponent;
  let fixture: ComponentFixture<CardMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
