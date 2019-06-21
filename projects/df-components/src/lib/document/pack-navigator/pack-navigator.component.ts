import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from "@angular/core"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  tap
} from "rxjs/operators"
import { Subject } from "rxjs"
import { TreeModel, TreeNode } from "angular-tree-component"

@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit, OnChanges {
  public options: any
  public filter: Subject<string> = new Subject<string>()
  public nodeEdit: Subject<any> = new Subject<any>()
  public treeDataVisible: boolean
  // tslint:disable-next-line: variable-name
  public _nodes: NavigatorTreeNode[]
  // tslint:disable-next-line:no-empty
  constructor() {}

  @ViewChild("filterInput", { static: false })
  public filterInput

  @ViewChild("tree", { static: true })
  public tree

  @Input()
  public readOnly: boolean

  @Input()
  public nodes

  @Output()
  public onToggleExpand: EventEmitter<any> = new EventEmitter()

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter()

  @Output()
  public onNodeEdited: EventEmitter<any> = new EventEmitter()

  @Output()
  public onMoveNode: EventEmitter<any> = new EventEmitter()

  public handleActivate($event) {
    const node = $event.node
    if (!node.children) {
      this.onSelect.emit(node)
    }
  }

  public handleClick($event) {
    // tslint:disable-next-line:no-console
    console.log("handleClick =>", $event)
  }

  public handleToggleExpanded($event) {
    this.onToggleExpand.emit($event)
  }

  public ngOnInit() {
    this.options = {
      actionMapping: {
        mouse: {
          contextMenu: (tree, node, $event) => {
            if (!this.readOnly) {
              $event.preventDefault()
              node.data.edit = !node.data.edit
            }
          },
          drop: (
            tree: TreeModel,
            node: TreeNode,
            $event: any,
            { from, to }: { from: any; to: any }
          ) => {
            // default action assumes from = node, to = {parent, index}
            if ($event.ctrlKey) {
              tree.copyNode(from, to)
            } else {
              tree.moveNode(from, to)
            }
          }
        }
      },
      allowDrag: node => {
        if (this.readOnly) {
          return false
        }

        return node.isLeaf
      },
      allowDrop: (element, { parent, index }) => {
        if (this.readOnly) {
          return false
        }
        return true // parent.hasChildren
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
        distinctUntilChanged()
      )
      .subscribe((payload: { $event: any; val: string; node: any }) => {
        // tslint:disable-next-line:no-console
        console.log(payload.$event, payload.$event.key)
        if (payload.$event.key === "Enter") {
          payload.node.data.caption = payload.val
          payload.node.data.edit = false
          this.onNodeEdited.emit({ id: payload.node.id, caption: payload.val })
        }
        if (
          payload.$event.key === undefined ||
          payload.$event.key === "Escape"
        ) {
          payload.node.data.edit = false
        }
      })
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes.nodes) {
      return
    }
    this.nodes.forEach(node => {
      this.expandNode(node)
    })
  }

  public ngAfterViewInit(): void {
    if (!this.nodes) {
      return
    }
    this.nodes.forEach(node => {
      this.expandNode(node)
    })
  }

  private expandNode(node) {
    if (node && node.expanded) {
      if (this.tree.treeModel.virtualRoot) {
        const expandNode = this.tree.treeModel.getNodeBy(
          p => `${p.id}` === `${node.id}`
        )
        expandNode.expand()
        if (node.children) {
          node.children.forEach(child => {
            this.expandNode(child)
          })
        }
      }
    }
  }

  public clearFilter() {
    this.filterInput.value = null
    this.filter.next("")
  }

  public getNodeColour(node) {
    const active = node.data.active ? "active" : ""
    return `border-left-${node.data.colour} ${active}`
  }

  public handleDblClick($event) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }
}
