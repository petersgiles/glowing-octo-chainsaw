import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withKnobs } from "@storybook/addon-knobs"

import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { MdcButtonModule, MdcDialogModule } from "@angular-mdc/web"

import { DialogStoryComponent } from "./dialog-story/dialog-story.component"
import {
  DialogAreYouSureComponent,
  DialogsModule
} from "../../../../../projects/df-components/src/public_api"

const ENTRYCOMPONENTS = [DialogAreYouSureComponent]

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
