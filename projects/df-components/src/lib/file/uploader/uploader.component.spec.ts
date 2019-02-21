import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderComponent } from './uploader.component';
import { FileComponent } from '../file/file.component';
import { LoadingComponent } from '../loading/loading.component';

describe('UploaderComponent', () => {
  let component: UploaderComponent;
  let fixture: ComponentFixture<UploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderComponent, LoadingComponent, FileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
