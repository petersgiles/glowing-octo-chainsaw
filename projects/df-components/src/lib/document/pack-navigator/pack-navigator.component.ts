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
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'
import { multiFilter } from '../../utils/filters';
import { Subject } from 'rxjs';


@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit {
  public options: any
  public filter: Subject<string> = new Subject<string>()

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
if(val) {
  this.tree.treeModel.filterNodes((node) => {
    const caption = node.data.caption.toLowerCase()
    return caption.includes(val);
  }, true);
} else {
  this.tree.treeModel.clearFilter()
}

      
    })

  }

  // private findAncestors(nodeId) {

  //   const found = this.storyData.find(sd => sd.id === nodeId)
  //   if(found) {
  //     if(found.parent) {
  //       return [nodeId, ...this.findAncestors(found.parent)]
  //     }
  //     return [nodeId]
  //   }
  //   return []
  // }

  public getNodeColour(node) {
    const active = node.data.active ? "active" : ""
    return `border-left-${node.data.colour} ${active}`
  }
}
