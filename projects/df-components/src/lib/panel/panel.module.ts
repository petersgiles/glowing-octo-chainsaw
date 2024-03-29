import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ExpanderPanelComponent } from "./expander-panel/expander-panel.component"
import { BrowserModule } from "@angular/platform-browser"
import { MdcButtonModule, MdcIconModule } from "@angular-mdc/web"
import { ButtonModule } from '../button/button.module'
import { PipesModule } from '../pipes/pipes.module'
import { SlimPanelComponent } from './slim-panel/slim-panel.component'
import { ViewGuardComponent } from './view-guard/view-guard.component'

const COMPONENTS = [ExpanderPanelComponent, SlimPanelComponent, ViewGuardComponent]

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    MdcButtonModule, 
    MdcIconModule, 
    ButtonModule, 
    PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PanelModule {}
