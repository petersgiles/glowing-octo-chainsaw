import { Component, Input, Output, EventEmitter } from "@angular/core"
import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withKnobs, boolean, text, array } from "@storybook/addon-knobs"

import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"
import { MdcButtonModule, MdcDialog, MdcDialogModule } from "@angular-mdc/web"
import { DialogsModule } from "../dialogs.module"
import { DialogStoryComponent } from './dialog-story/dialog-story.component';
import { DialogAreYouSureComponent } from '../dialog-are-you-sure/dialog-are-you-sure.component';

const ENTRYCOMPONENTS = [
  DialogAreYouSureComponent,
]

storiesOf("Dialog", module)
.addDecorator(withReadme(Readme))
  .addDecorator(
    moduleMetadata({
      imports: [DialogsModule, MdcButtonModule, MdcDialogModule],
      declarations: [DialogStoryComponent],
      entryComponents: ENTRYCOMPONENTS
    })
  )
  .addDecorator(withKnobs)
  .add("All", () => ({
    template: `<df-dialog-story (onStoryEvent)="handleEvent($event,'onStoryEvent')"></df-dialog-story>`,
    props: {
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
