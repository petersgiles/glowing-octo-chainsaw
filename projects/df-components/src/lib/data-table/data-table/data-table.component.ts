import { Component, Input, OnInit } from "@angular/core"

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
}
