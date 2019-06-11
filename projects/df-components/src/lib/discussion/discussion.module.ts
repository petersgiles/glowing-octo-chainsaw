import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DiscussionComponent } from "./discussion/discussion.component"
import {
  MdcButtonModule,
  MdcIconModule,
  MdcListModule,
  MdcTextFieldModule
} from "@angular-mdc/web"
import { AvatarModule } from "../avatar/avatar.module"
import { PipesModule } from "../pipes/pipes.module"

const COMPONENTS = [DiscussionComponent]

@NgModule({
  imports: [
    CommonModule,
    MdcButtonModule,
    MdcIconModule,
    MdcListModule,
    MdcTextFieldModule,
    AvatarModule,
    PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DiscussionModule {}
