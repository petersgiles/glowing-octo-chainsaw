import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { FormBuilder } from "@angular/forms"
import { statuslist } from "../data"

@Component({
  selector: "df-status-picker-story",
  templateUrl: "./status-picker-story.html",
  styles: [
    `
      .demo-content {
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: 1.5rem 1rem;
        padding: 1rem;
      }

      .demo-layout__row {
        display: flex;
        flex-flow: row wrap;
        margin-top: 0.8rem;
      }
    `
  ]
})
export class StatusPickerStoryComponent implements OnInit, OnDestroy {
  public documentStatusList$: BehaviorSubject<any>

  public otherStatus: 3
  public stars: null
  // tslint:disable-next-line:no-empty
  constructor(private fb: FormBuilder) {}

  @Output()
  public selectionClicked: EventEmitter<any> = new EventEmitter()

  public form = this.fb.group({
    status: [null],
    stars: [null]
  })

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.form.patchValue({
      status: "3",
      stars: 3
    })

    this.documentStatusList$ = new BehaviorSubject(statuslist)
  }

  // tslint:disable-next-line:no-empty
  public ngOnDestroy(): void {}

  public handleSubmit($event) {
    // tslint:disable-next-line:no-console
    console.log(this.form.value)
  }

  // tslint:disable-next-line:no-empty
  public handleSelectionClicked($event) {
    // tslint:disable-next-line:no-console
    console.log($event)

    this.selectionClicked.emit($event)
  }
}
