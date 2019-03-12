import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcChipsModule } from '@angular-mdc/web';
import { MegaTagsComponent } from './mega-tags/mega-tags.component';
import { MegaTagChooserComponent } from './mega-tag-chooser/mega-tag-chooser.component';

import { FormsModule } from '@angular/forms';
import { PanelModule } from '../panel';

const COMPONENTS = [MegaTagsComponent, MegaTagChooserComponent]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    MdcChipsModule,
  ]
})
export class MegaTaggerModule { }
