import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { StatusPickerComponent } from "./status-picker/status-picker.component"
import { MdcChipsModule, MdcListModule, MdcIconModule } from '@angular-mdc/web';
import { PackNavigatorComponent } from './pack-navigator/pack-navigator.component';
import { TreeModule } from 'angular-tree-component';

const COMPONENTS = [StatusPickerComponent, PackNavigatorComponent]
@NgModule({
  imports: [
    CommonModule,
    MdcIconModule,
    MdcListModule,
    MdcChipsModule,
    TreeModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DocumentModule {}
