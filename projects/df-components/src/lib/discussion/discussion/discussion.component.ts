import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "df-discussion",
  templateUrl: "./discussion.component.html",
  styleUrls: ["./discussion.component.scss"]
})
export class DiscussionComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Input()
  public activeComment

  @Input()
  public hostId

  @Input()
  public comments

  @Input()
  public timeFormat

  @Input()
  public readOnly = false

  @Output() public onDeleteComment: EventEmitter<any> = new EventEmitter()
  @Output() public onReplyToComment: EventEmitter<any> = new EventEmitter()
  @Output() public onAddComment: EventEmitter<any> = new EventEmitter()

  public getIndent(level): any {
    return { "margin-left.px": level * 10 }
  }

  public getSecondaryText(comment) {
    const text = []
    if (comment.author) {
      text.push(comment.author.name)
    }

    return text.join(", ")
  }

  public hasChildren(comment): boolean {
    return comment.children && comment.children.length > 0
  }

  public hasParent(comment): boolean {
    return !!comment.parent
  }

  public handleResetTextFieldValue(input: any) {
    input.setValue(null)
    this.onReplyToComment.emit(null)
  }

  public handleDeleteComment(comment) {
    this.onDeleteComment.emit({
      hostId: this.hostId,
      id: comment.id
    })
  }

  public handleAddComment(comment: any, input: any) {
    this.onAddComment.emit({
      hostId: this.hostId,
      parent: comment,
      text: input.value
    })

    input.setValue(null)
  }
}
