import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core"
import { MegaTagsService } from "../mega-tags.service"
import { MegaTag } from '../models/mega-tag';

@Component({
  selector: "df-mega-tag-chooser",
  templateUrl: "./mega-tag-chooser.component.html",
  styleUrls: ["./mega-tag-chooser.component.scss"]
})
export class MegaTagChooserComponent implements OnInit {
  constructor(private service: MegaTagsService) {}
  public tags: any
  public groups: any

  @Output()
  public onSelectionChange: EventEmitter<any> = new EventEmitter()

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


  public selectionChange($event, tag){
    this.onSelectionChange.emit({
      ...tag,
      selected: $event.detail.selected
    })
  }

  public trackByFn(i: number, item: MegaTag) {
    return item.id;
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
