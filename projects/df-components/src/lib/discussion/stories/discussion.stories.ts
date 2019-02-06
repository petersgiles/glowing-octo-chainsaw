import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { BrowserModule } from "@angular/platform-browser"
import { BehaviorSubject, of } from "rxjs"
import {
  MdcIconModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcButtonModule
} from "@angular-mdc/web"
import { DiscussionModule } from "../discussion.module"
import { AvatarModule } from "../../avatar/avatar.module"
import { discussionTree } from './discussion-data'
import { withReadme } from "storybook-readme"
import * as Readme from "../README.md"

const comments$: BehaviorSubject<any[]> = new BehaviorSubject(discussionTree)

storiesOf("Discussion", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        MdcButtonModule,
        MdcIconModule,
        MdcListModule,
        MdcTextFieldModule,
        AvatarModule,
        DiscussionModule
      ]
    })
  )
  .addDecorator(withReadme(Readme))
  .addDecorator(withLinks)
  .add("Usages", () => ({
    template: `
    <df-discussion [hostId]="'some-guid'" [comments]="comments$ | async">
    </df-discussion>
    `,
    props: {
        comments$: comments$,
    }
  }))
