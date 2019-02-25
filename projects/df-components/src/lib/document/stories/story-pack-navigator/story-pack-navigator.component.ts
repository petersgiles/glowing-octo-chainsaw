import { Component, OnInit, ViewChild } from "@angular/core"
import { Observable, BehaviorSubject, Subject } from "rxjs"
import { NavigatorTreeNode } from "../.."
import { navigatorData } from "../../../../.data/deck-data"
import {
  map
} from "rxjs/operators"
import { toTree, sortBy } from "../../../utils/array-to-tree"
import { multiFilter } from "../../../utils/filters"

@Component({
  selector: "df-story-pack-navigator",
  templateUrl: "./story-pack-navigator.component.html",
  styleUrls: ["./story-pack-navigator.component.scss"]
})
export class StoryPackNavigatorComponent implements OnInit {
  public nodes$: Observable<any>
  public storyData: NavigatorTreeNode[]

  public navData$: BehaviorSubject<NavigatorTreeNode[]> = new BehaviorSubject([])

  constructor() {
    this.storyData = navigatorData
  }

  public ngOnInit() {
    this.navData$.next(this.storyData)

    this.nodes$ = this.navData$.pipe(
      map(nd => {
        return toTree(nd.sort(sortBy("order")), {
          id: "id",
          parentId: "parent",
          children: "children",
          level: "level"
        })
      })
    )
  }



  // tslint:disable-next-line:no-empty
  public handleEvent($event, name) {}

  // tslint:disable-next-line:no-empty
  public handleAction(node) {}

  public handleSelect(node) {
    const navData = this.storyData.map(n => ({ ...n, active: false }))
    const found = { ...navData.find(n => n.id === node.id) }
    found.active = true
    const list = [
      ...navData.filter(n => n.id !== node.id),
      found
    ]
    this.navData$.next(list)
  }
}
