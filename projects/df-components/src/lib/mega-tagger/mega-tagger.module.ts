import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcChipsModule, MdcIconModule } from '@angular-mdc/web';
import { MegaTagsComponent } from './mega-tags/mega-tags.component';
import { MegaTagChooserComponent } from './mega-tag-chooser/mega-tag-chooser.component';

import { FormsModule } from '@angular/forms';

const COMPONENTS = [MegaTagsComponent, MegaTagChooserComponent]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    MdcIconModule,
    MdcChipsModule,
  ]
})
export class MegaTaggerModule { }
