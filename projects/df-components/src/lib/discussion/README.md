# DfDiscussion

## API

Selector: df-discussion
Exported As: DiscussionComponent

### Properties

| Name                   | Description                            |
| ---------------------- | -------------------------------------- |
| activeComment: Comment | the currently selected comment         |
| hostId: string         | the id of the artifact being discussed |
| comments: Comment[]    | the comments                           |
| timeFormat: string     | sets the time format                   |
| readOnly: boolean      | sets to ready only                     |

### Events

| Name                  | Description                       |
| --------------------- | --------------------------------- |
| onReplyToComment: any | emits comment data with parent id |
| onDeleteComment: any  | emits comment data                |
| onAddComment: any     | emits comment data with parent id |

## Examples

`npm i --save @df/components`

`import { DiscussionModule } from '@df/components'`

### Read Only

```html
<df-discussion
  [hostId]="'some-guid'"
  [comments]="comments$ | async"
  [readOnly]="true"
></df-discussion>
```

### Discussion

```html
<df-discussion
  [hostId]="'some-guid'"
  [comments]="comments$ | async"
  (onReplyToComment)="handleEvent($event, 'onReplyToComment')"
  (onDeleteComment)="handleEvent($event, 'onDeleteComment')"
  (onAddComment)="handleEvent($event, 'onAddComment')"
></df-discussion>
```
