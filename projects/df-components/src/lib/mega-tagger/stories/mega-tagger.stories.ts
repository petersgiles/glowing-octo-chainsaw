import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"

import {
  MdcButtonModule,
  MdcIconModule,
  MdcIconButtonModule,
} from "@angular-mdc/web"
import { MegaTaggerModule } from '../mega-tagger.module';
import { MegaTaggerStoryComponent } from './mega-tagger-story/mega-tagger-story.component';

storiesOf("Mega Tagger", module)
.addParameters({ jest: ["mega-tags.component", "mega-tag-chooser.component"] })
.addDecorator(
  moduleMetadata({
    imports: [
      BrowserModule,
      MdcButtonModule,
      MdcIconModule,
      MdcIconButtonModule,
      MegaTaggerModule
    ],
    declarations: [MegaTaggerStoryComponent],
  })
)
.addDecorator(withReadme(Readme))
.addDecorator(withLinks)
.add("Basic", () => ({
  template: `<df-mega-tagger-story></df-mega-tagger-story>`,
  props: {
    handleEvent: ($event, name) => {
    action(name)($event)
    },
  }
}))

