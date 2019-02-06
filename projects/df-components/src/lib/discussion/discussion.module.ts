import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './discussion/discussion.component';
import { MdcListModule, MdcIconModule, MdcTextFieldModule, MdcButtonModule } from '@angular-mdc/web';
import { AvatarModule } from '../avatar/avatar.module';

const COMPONENTS = [
  DiscussionComponent
]

@NgModule({
  imports: [
    CommonModule,
    MdcButtonModule,
    MdcIconModule,
    MdcListModule,
    MdcTextFieldModule,
    AvatarModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS

})
export class DiscussionModule { }
