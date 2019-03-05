import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core"
import { MegaTag } from '../models/mega-tag';

@Component({
  selector: "df-mega-tag-chooser",
  templateUrl: "./mega-tag-chooser.component.html",
  styleUrls: ["./mega-tag-chooser.component.scss"]
})
export class MegaTagChooserComponent implements OnInit {

  @Input()
  public tags: MegaTag[]

  @Output()
  public onSelectionChange: EventEmitter<any> = new EventEmitter()

  @Output()
  public onToggleExpand: EventEmitter<any> = new EventEmitter()

  @Input()
  public artifact: string | number

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
