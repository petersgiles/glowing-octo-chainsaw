import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { NavigatorTreeNode } from "../models/navigator-tree-node"

@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Input()
  public list: NavigatorTreeNode[]

  @Output()
  public onAction: EventEmitter<any> = new EventEmitter()


  public buildClass(node){
    const active = node.active ? 'active' : null
    return `${active} level-${node.level} pack-highlight-${node.colour}`
  }
}
