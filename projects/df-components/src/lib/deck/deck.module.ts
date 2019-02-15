import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DeckComponent } from "./deck/deck.component"
import {
  MdcCardModule,
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcImageListModule
} from "@angular-mdc/web"
import { CardStandardComponent } from "./card-standard/card-standard.component"
import { CardAudioComponent } from "./card-audio/card-audio.component"
import { CardChartComponent } from "./card-chart/card-chart.component"
import { CardImageComponent } from "./card-image/card-image.component"
import { CardMarkdownComponent } from "./card-markdown/card-markdown.component"
import { CardParentComponent } from "./card-parent/card-parent.component"

const COMPONENTS = [
  DeckComponent,
  CardAudioComponent,
  CardChartComponent,
  CardImageComponent,
  CardMarkdownComponent,
  CardParentComponent,
  CardStandardComponent
]

@NgModule({
  imports: [
    CommonModule,
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
