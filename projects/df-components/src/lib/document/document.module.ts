import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { StatusPickerComponent } from "./status-picker/status-picker.component"
import { MdcChipsModule, MdcListModule, MdcIconModule, MdcTextFieldModule } from '@angular-mdc/web';
import { PackNavigatorComponent } from './pack-navigator/pack-navigator.component';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { RatingInputComponent } from './rating-input/rating-input.component';

const COMPONENTS = [StatusPickerComponent, PackNavigatorComponent, RatingInputComponent]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdcIconModule,
    MdcListModule,
    MdcChipsModule,
    MdcTextFieldModule,
    TreeModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DocumentModule {}
