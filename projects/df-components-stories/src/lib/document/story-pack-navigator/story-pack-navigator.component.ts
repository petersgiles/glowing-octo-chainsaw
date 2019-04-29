import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core"
import { Observable, BehaviorSubject, Subscription } from "rxjs"
import { map } from "rxjs/operators"
import { navigatorData } from "../../.data/deck-data"
import { toTree, sortBy } from '../../../../../../projects/df-components/src/lib/utils/array-to-tree';
import { NavigatorTreeNode } from '../../../../../../projects/df-components/src/public_api';

@Component({
  selector: "df-story-pack-navigator",
  templateUrl: "./story-pack-navigator.component.html",
  styleUrls: ["./story-pack-navigator.component.scss"]
})
export class StoryPackNavigatorComponent implements OnInit, OnDestroy {
  public nodes$: Observable<any>
  public storyData: NavigatorTreeNode[]

  public navData$: BehaviorSubject<NavigatorTreeNode[]> = new BehaviorSubject([])
  public nodesSubscription$: Subscription
  public tree: any;

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

    this.nodesSubscription$ = this.nodes$.subscribe(p => this.tree = p)
  }

  public ngOnDestroy() {
    this.nodesSubscription$.unsubscribe()
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

  public expandNode(){
    this.storyData = this.storyData.map(p => ({
      ...p,
      expanded: true}
      ))

    this.navData$.next(this.storyData)
  }
}
