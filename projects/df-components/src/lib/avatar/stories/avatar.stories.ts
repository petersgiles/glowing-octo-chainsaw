import { storiesOf, moduleMetadata } from "@storybook/angular"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"

import { AvatarModule } from "../../avatar/avatar.module"
import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"

storiesOf("Avatar", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        AvatarModule,
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Usages", () => ({
    template: `
    <df-avatar name="Guest" displayType="circle" size="35"></df-avatar>
    `,
    props: {}
  }))
