import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaTagsComponent } from './mega-tags/mega-tags.component';
import { MegaTagChooserComponent } from './mega-tag-chooser/mega-tag-chooser.component';

const COMPONENTS = [MegaTagsComponent, MegaTagChooserComponent]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class MegaTaggerModule { }
