import { Component } from "@angular/core"
import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withKnobs } from "@storybook/addon-knobs"

import { action } from "@storybook/addon-actions"

import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { FileModule } from "../../../../../projects/df-components/src/public_api"
import { MdcButtonModule } from "@angular-mdc/web"

@Component({
  selector: "app-file-dropper",
  template: `
    <df-file-dropper></df-file-dropper>
  `
})
class FileDropperStory {}

storiesOf("File Dropper", module)
  .addDecorator(withReadme(Readme))
  .addDecorator(
    moduleMetadata({
      imports: [FileModule, MdcButtonModule],
      declarations: [FileDropperStory]
    })
  )
  .addDecorator(withKnobs)
  .add("Basic", () => ({
    template: `<app-file-dropper></app-file-dropper>`,
    props: {
      handleEvent: ($event, name) => action(name)($event)
    }
  }))
