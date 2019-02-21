import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "df-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent {
  @Input()
  public title = "loading"

  /**
   * Specify the size of the button
   * @type {("normal" | "sm")}
   * @memberof Loading
   */
  @Input()
  public size: "normal" | "sm" = "normal"
}
