import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core"
import { Page } from "../models/data-table-model"
import { Subject } from "rxjs"
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators"

@Component({
  selector: "df-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit, OnDestroy {
  public filter: Subject<string> = new Subject<string>()

  // tslint:disable-next-line:no-empty
  constructor() {
    this.filter
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((val: string) => this.onFilter.emit(val))
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

  @Input()
  public hasDelete = false

  @Input()
  public hasFilter = false

  @Input()
  public selectionType = "single"

  @Input()
  public rows

  @Input()
  public columns

  @Input()
  public count

  @Input()
  public limit

  @Input()
  public messages: any = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: "No data to display",

    // Footer total message
    totalMessage: "total"
  }

  @Input()
  public totalMessage: "total"

  @Output()
  public onPage: EventEmitter<Page> = new EventEmitter()

  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter()

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter()

  @Output()
  public onFilter: EventEmitter<string> = new EventEmitter()

  public ngOnDestroy(): void {
    this.filter.unsubscribe()
  }
}
