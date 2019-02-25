import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DialogAreYouSureComponent } from "./dialog-are-you-sure/dialog-are-you-sure.component"
import { MdcButtonModule, MdcDialogModule } from '@angular-mdc/web';

const COMPONENTS = [DialogAreYouSureComponent]

@NgModule({
  imports: [
    CommonModule, 
    MdcButtonModule,
    MdcDialogModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DialogsModule {}
