import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropperComponent } from './dropper.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MdcButtonModule, MdcIconModule, MdcListModule } from '@angular-mdc/web';

describe('DropperComponent', () => {
  let component: DropperComponent;
  let fixture: ComponentFixture<DropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      NgxFileDropModule,
      MdcButtonModule,
      MdcIconModule,
      MdcListModule,
    ],
      declarations: [ DropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
