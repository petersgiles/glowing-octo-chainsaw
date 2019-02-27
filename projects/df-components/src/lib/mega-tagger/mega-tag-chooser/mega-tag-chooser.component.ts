import { Component, OnInit, Input, ViewChild } from "@angular/core"
import { MegaTagsService } from "../mega-tags.service"

@Component({
  selector: "df-mega-tag-chooser",
  templateUrl: "./mega-tag-chooser.component.html",
  styleUrls: ["./mega-tag-chooser.component.scss"]
})
export class MegaTagChooserComponent implements OnInit {
  constructor(private service: MegaTagsService) {}
  public tags: any
  public groups: any

  @Input()
  public set artifact(val: string | number) {
    this.service
      .getAllTagsByArtifact(val)
      .subscribe((result: { tags: any; groups: any }) => {
        // tslint:disable-next-line:no-console
        console.log(result)
        this.tags = result.tags
        this.groups = result.groups
      })
  }

  public isChecked(group: any, tag: any) {
    return true
  }
  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
