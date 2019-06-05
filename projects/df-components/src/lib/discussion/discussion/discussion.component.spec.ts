import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionComponent } from './discussion.component';
import { CommonModule } from '@angular/common';
import { MdcButtonModule, MdcIconModule, MdcListModule, MdcTextFieldModule } from '@angular-mdc/web';
import { AvatarModule } from '../../avatar/avatar.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PipesModule } from '../../pipes';

describe('DiscussionComponent', () => {
  let component: DiscussionComponent;
  let fixture: ComponentFixture<DiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // TODO: work out how to test recursive templates
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
      //   CommonModule,
      //   MdcButtonModule,
      //   MdcIconModule,
      //   MdcListModule,
      //   MdcTextFieldModule,
      //   AvatarModule,
      PipesModule
      ],
      declarations: [ DiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
