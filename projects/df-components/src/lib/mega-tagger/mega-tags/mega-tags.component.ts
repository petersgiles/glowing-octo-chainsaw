import { Component, OnInit, Input } from "@angular/core"
import { MegaTag } from "../models/mega-tag"
import { MegaTagsService } from "../mega-tags.service"
import { first } from "rxjs/operators"

@Component({
  selector: "df-mega-tags",
  templateUrl: "./mega-tags.component.html",
  styleUrls: ["./mega-tags.component.scss"]
})
export class MegaTagsComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor(private service: MegaTagsService) {}
  public tags: any
  public groups: any

  @Input()
  public set artifact(val: string | number) {
    this.service
      .getTagsByArtifact(val)
      .pipe(first())
      .subscribe(t => {
        this.tags = t
        this.groups = Object.keys(t)
      }
        
        )
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
