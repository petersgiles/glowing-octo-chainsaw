import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "./README.md"

import {
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
  MdcFormFieldModule ,
  MdcRadioModule,
  MdcChipsModule
} from "@angular-mdc/web"

import { MegaTaggerStoryComponent } from './mega-tagger-story/mega-tagger-story.component';
import { MockMegaTagsService } from './mock-mega-tags.service';
import { MegaTaggerModule, MegaTagsService, PanelModule } from '../../../../df-components/src/public_api';

storiesOf("Mega Tagger", module)
.addParameters({ jest: ["mega-tags.component", "mega-tag-chooser.component"] })
.addDecorator(
  moduleMetadata({
    imports: [
      BrowserModule,
      MdcButtonModule,
      MdcIconModule,
      MdcIconButtonModule,
      MegaTaggerModule,
      PanelModule,
      MdcFormFieldModule ,
      MdcChipsModule ,
      MdcRadioModule
    ],
    declarations: [MegaTaggerStoryComponent],
    providers: [{ provide: MegaTagsService, useClass: MockMegaTagsService }]
  })
)
.addDecorator(withReadme(Readme))
.addDecorator(withLinks)
.add("Basic", () => ({
  template: `<df-mega-tagger-story (onSelectionChange)="handleEvent($event, 'onSelectionChange')"></df-mega-tagger-story>`,
  props: {
    handleEvent: ($event, name) => {
    action(name)($event)
    },
  }
}))

