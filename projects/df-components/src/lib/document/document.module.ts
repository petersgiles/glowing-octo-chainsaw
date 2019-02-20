import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { StatusPickerComponent } from "./status-picker/status-picker.component"
import { MdcChipsModule, MdcListModule, MdcIconModule } from '@angular-mdc/web';
import { PackNavigatorComponent } from './pack-navigator/pack-navigator.component';

const COMPONENTS = [StatusPickerComponent, PackNavigatorComponent]
@NgModule({
  imports: [
    CommonModule,
    MdcIconModule,
    MdcListModule,
    MdcChipsModule 
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DocumentModule {}
