import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import { toTree, sortBy } from "../../utils/array-to-tree"

@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit {
  public options: any

  // tslint:disable-next-line:no-empty
  constructor() {}

  @Input()
  public nodes: NavigatorTreeNode[]

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter()

  @Output()
  public onMoveNode: EventEmitter<any> = new EventEmitter()

  public handleActivate($event) {
    // tslint:disable-next-line:no-console
    console.log("handleActivate =>", $event)
    const node = $event.node
    if (!node.children) {
       this.onSelect.emit(node)
    }
  }

  public handleClick($event) {
    // tslint:disable-next-line:no-console
    console.log("handleClick =>", $event)
    
  }

  public ngOnInit() {
    this.options = {
      allowDrag: node => node.isLeaf,
      allowDrop: (element, { parent, index }) => {
        // return true / false based on element, to.parent, to.index. e.g.
        return parent.hasChildren
      }
    }
  }

  public getNodeColour(node) {
    const active = node.data.active ? "active" : ""
    return `border-left-${node.data.colour} ${active}`
  }
}
