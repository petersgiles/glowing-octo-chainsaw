import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ExpanderPanelComponent } from "./expander-panel/expander-panel.component"
import { BrowserModule } from "@angular/platform-browser"
import { MdcButtonModule, MdcIconModule } from "@angular-mdc/web"

const COMPONENTS = [ExpanderPanelComponent]

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    MdcButtonModule, 
    MdcIconModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PanelModule {}
