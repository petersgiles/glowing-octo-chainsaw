import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core"
import { Page } from '../models/data-table-model'

@Component({
  selector: "df-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit {

  // tslint:disable-next-line:no-empty
  constructor() {}

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
  public onFilter: EventEmitter<any> = new EventEmitter()
}
