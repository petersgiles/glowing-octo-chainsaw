import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { withReadme } from "storybook-readme/backwardCompatibility"
import * as Readme from "./README.md"
import { AvatarModule } from "../../../../../projects/df-components/src/public_api"

storiesOf("Avatar", module)
  .addParameters({ jest: ["avatar.component"] })
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, AvatarModule]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Circle", () => ({
    template: `
    <df-avatar name="Guest User" displayType="circle" size="35"></df-avatar>
    `,
    props: {}
  }))
  .add("Rounded", () => ({
    template: `
    <df-avatar name="Muppet Puppet" displayType="rounded" size="35" background='#333333'></df-avatar>
    `,
    props: {}
  }))
  .add("Square", () => ({
    template: `
    <df-avatar name="Tomato Fruit" background='tomato'></df-avatar>
    `,
    props: {}
  }))
