import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core"
import { Page } from '../models/data-table-model'
import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: "df-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit {

  private filter: Subject<string> = new Subject<string>();

  // tslint:disable-next-line:no-empty
  constructor() {
    this.filter
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
      )
    .subscribe((val: string) => this.onFilter.emit(val));
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

  @Input()
  public rows

  @Input()
  public columns

  @Input()
  public count

  @Output()
  public onPage: EventEmitter<Page> = new EventEmitter()

  @Output()
  public onFilter: EventEmitter<string> = new EventEmitter()

}
