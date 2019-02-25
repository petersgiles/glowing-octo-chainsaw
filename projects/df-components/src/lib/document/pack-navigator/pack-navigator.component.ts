import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild
} from "@angular/core"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import { toTree, sortBy } from "../../utils/array-to-tree"
import { debounceTime, distinctUntilChanged, map, filter, tap } from "rxjs/operators"
import { multiFilter } from "../../utils/filters"
import { Subject } from "rxjs"
import { IActionMapping, TREE_ACTIONS, KEYS } from 'angular-tree-component';

const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      node.data.edit = !node.data.edit
    },
    dblClick: (tree, node, $event) => {
      alert(`dblClick menu for ${node.data.caption}`);
    }
  }
};


@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit {
  public options: any
  public filter: Subject<string> = new Subject<string>()
  public nodeEdit: Subject<any> = new Subject<any>()
  // tslint:disable-next-line:no-empty
  constructor() {}

  @ViewChild("tree")
  public tree

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
      actionMapping,
      allowDrag: node => node.isLeaf,
      allowDrop: (element, { parent, index }) => {
        // return true / false based on element, to.parent, to.index. e.g.
        return parent.hasChildren
      }
    }

    this.filter
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(f => f.toLowerCase())
      )
      // tslint:disable-next-line:no-console
      .subscribe((val: string) => {
        if (val) {
          this.tree.treeModel.filterNodes(node => {
            const caption = node.data.caption.toLowerCase()
            return caption.includes(val)
          }, true)
        } else {
          this.tree.treeModel.clearFilter()
        }
      })


      this.nodeEdit
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
      )
      .subscribe((payload: {$event: any, val: string, node: any }) => {
        console.log(payload.$event, payload.$event.key)
        if(payload.$event.key === "Enter"){
          payload.node.data.caption = payload.val
          payload.node.data.edit = false
        }
        if(payload.$event.key === undefined || payload.$event.key === "Escape"){
          payload.node.data.edit = false
        }
      })

  }

  public getNodeColour(node) {
    const active = node.data.active ? "active" : ""
    return `border-left-${node.data.colour} ${active}`
  }

  public handleDblClick($event) {
console.log($event)
  }
}
