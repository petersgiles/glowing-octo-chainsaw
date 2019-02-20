import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from "@angular/core"
import { NavigatorTreeNode } from "../models/navigator-tree-node"
import { toTree, sortBy } from "../../utils/array-to-tree"

@Component({
  selector: "df-pack-navigator",
  templateUrl: "./pack-navigator.component.html",
  styleUrls: ["./pack-navigator.component.scss"]
})
export class PackNavigatorComponent implements OnInit {
  public internalList: NavigatorTreeNode[]
  public tree: NavigatorTreeNode[]
  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  @Input()
  public set list (val: NavigatorTreeNode[]){
    if (val) {
      this.internalList = val.sort(sortBy("order"))

      this.makeTree();
    }
  }

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter()

  private makeTree() {
    this.tree = toTree(this.internalList, {
      id: "id",
      parentId: "parent",
      children: "children",
      level: "level"
    });
  }

  public handleClick(node:NavigatorTreeNode){

    if (node) {
      if (node.children) {

        // expand action
        const found = { ...this.internalList.find(n => n.id === node.id) }
        found.expanded = !found.expanded
        this.internalList = [...this.internalList.filter(n => n.id !== node.id), found]
      } else {
        // select action
        const found = { ...this.internalList.find(n => n.id === node.id) }
        found.active = !found.active
        this.internalList = [...this.internalList.map(n => ({...n, active: false})).filter(n => n.id !== node.id), found]
        this.onSelect.emit(node)
      }
      this.makeTree();
    }

  }

  public buildClass(node) {
    const active = node.active ? "active" : ""
    const anyChildActive = this.anyChildActive(node) ? "child-active" : ""
    return `level-${node.level} ${active} ${anyChildActive} pack-highlight-${
      node.colour
    }`
  }

  public anyChildActive(node: NavigatorTreeNode): boolean {
    if (!(node && node.children && node.children.length > 0)) return false
    if (node.children.some(c => c.active)) return true
    const nodesWithChildren = node.children
      .filter(c => node.children && node.children.length > 0)
      .reduce((acc: boolean[], n: NavigatorTreeNode) => {
        acc.push(this.anyChildActive(n))
        return acc
      }, [])

    return nodesWithChildren.some(n => n)
  }
}
