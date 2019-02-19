import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DeckComponent } from "./deck/deck.component"
import { ChartsModule } from "ng2-charts/ng2-charts"

import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcImageListModule
} from "@angular-mdc/web"

const COMPONENTS = [DeckComponent]

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcImageListModule,
    MdcCardModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DeckModule {}
