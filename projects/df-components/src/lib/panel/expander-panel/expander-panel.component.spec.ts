import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanderPanelComponent } from './expander-panel.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MdcButtonModule, MdcIconModule } from '@angular-mdc/web';
import { PipesModule } from '../../pipes/pipes.module';
import { ButtonModule } from '../../button/button.module';

describe('ExpanderPanelComponent', () => {
  let component: ExpanderPanelComponent;
  let fixture: ComponentFixture<ExpanderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule, 
        MdcButtonModule, 
        MdcIconModule, 
        ButtonModule, 
        PipesModule
      ],
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
