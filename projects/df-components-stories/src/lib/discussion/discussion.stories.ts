import { storiesOf, moduleMetadata } from "@storybook/angular"
import { action } from "@storybook/addon-actions"
import { withLinks } from "@storybook/addon-links"
import { BrowserModule } from "@angular/platform-browser"
import { BehaviorSubject } from "rxjs"
import {
  MdcIconModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcButtonModule
} from "@angular-mdc/web"

import { withReadme } from "storybook-readme"
import * as Readme from "./README.md"
import { UUID } from './uuid';

import { toTree } from '../../../../../projects/df-components/src/lib/utils/array-to-tree';
import { discussionTree, demoAuthor, discussionItems } from "./discussion-data"
import { AvatarModule, DiscussionModule } from '../../../../../projects/df-components/src/public_api';

const comments$: BehaviorSubject<Comment[]> = new BehaviorSubject(
  discussionTree
)
const activeComment$: BehaviorSubject<Comment> = new BehaviorSubject(null)

const props = {
  comments$: comments$,
  activeComment$: activeComment$,
  handleEvent: ($event: any, name: string) => action(name)($event),
  replyToComment: ($event: any) => {
    action("reply to comment")($event.id)
    activeComment$.next($event.id)
  },
  addComment: ($event: any) => {

    const parent = $event.parent
    const newcomment = {
      id: UUID(),
      commitment: parent ? parent.commitment : null,
      text: $event.text,
      created: new Date().toLocaleDateString(),
      parent: parent ? parent.id : null,
      author: demoAuthor
    }

    discussionItems.comments.push(newcomment)
    const tree = toTree(discussionItems.comments, {
      id: "id",
      parentId: "parent",
      children: "children",
      level: "level",
      firstParentId: null
    })
    comments$.next(tree)
    activeComment$.next(null)

    action("add comment")({$event, newcomment})
  },
  deleteComment: ($event: any) => {

    discussionItems.comments = discussionItems.comments.filter(c => c.id !== $event.id)
    const tree = toTree(discussionItems.comments, {
      id: "id",
      parentId: "parent",
      children: "children",
      level: "level",
      firstParentId: null
    })
    comments$.next(tree)
    activeComment$.next(null)

    action("delete comment")({$event, tree})
  }
}

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
  .add("Read Only", () => ({
    template: `
    <df-discussion [hostId]="'some-guid'" [comments]="comments$ | async" [readOnly]="true"></df-discussion>
    `,
    props: {
      comments$: comments$
    }
  }))
  .add("Discussion", () => ({
    template: `
    <df-discussion 
    [hostId]="'some-guid'" 
    [comments]="comments$ | async"
    [activeComment]="activeComment$ | async"
    (onReplyToComment)="replyToComment($event)"
    (onDeleteComment)="deleteComment($event)"
    (onAddComment)="addComment($event)"
    ></df-discussion>
    `,
    props: props
  }))
