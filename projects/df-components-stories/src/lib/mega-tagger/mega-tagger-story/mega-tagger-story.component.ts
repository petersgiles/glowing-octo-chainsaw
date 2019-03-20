import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core"
import { MegaTagsService } from "../../../../../df-components/src/public_api"
import { BehaviorSubject, Subscription } from "rxjs"
import { withLatestFrom, map, tap } from "rxjs/operators"

const artifacts = [
  { value: "a", caption: "Artifact 1" },
  { value: "b", caption: "Artifact 2" }
]

@Component({
  selector: "df-mega-tagger-story",
  templateUrl: "./mega-tagger-story.component.html",
  styleUrls: ["./mega-tagger-story.component.scss"]
})
export class MegaTaggerStoryComponent implements OnInit, OnDestroy {
  public tags: any

  public artifact$: BehaviorSubject<any> = new BehaviorSubject(
    artifacts[0].value
  )
  public artifacts$: BehaviorSubject<any> = new BehaviorSubject(artifacts)
  public expanded$: BehaviorSubject<any[]> = new BehaviorSubject([
    "states",
    "electorates"
  ])

  public groups: { id: string; title: string; expanded: boolean }[]
  public groupsSubscription$: Subscription
  public artifactSubscription$: Subscription
  public expandedSubscription$: Subscription

  public get artifact() {
    return this.artifact$.getValue()
  }

  public set artifact(val) {
    this.artifact$.next(val)
  }

  // tslint:disable-next-line:no-empty
  constructor(private service: MegaTagsService) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.artifactSubscription$ = this.artifact$
      .pipe(
        withLatestFrom(this.expanded$),
        // tslint:disable-next-line:no-console
        tap(([artifact, expanded]) => console.log(artifact, expanded)),
        map(([artifact, expanded]) => this.getAll(artifact, expanded))
      )
      .subscribe()

    this.expandedSubscription$ = this.expanded$
      .pipe(
        withLatestFrom(this.artifact$),
        // tslint:disable-next-line:no-console
        tap(([expanded, artifact]) => console.log(artifact, expanded)),
        map(([expanded, artifact]) => this.getAll(artifact, expanded))
      )
      .subscribe()
  }

  public ngOnDestroy(): void {
    this.artifactSubscription$.unsubscribe()
    this.expandedSubscription$.unsubscribe()
  }

  public getAll(artifact: any, expanded: any[]) {
    this.service.getAllTagsByArtifact(artifact).pipe(
      map((result: { tags: any; groups: any[] }) => {
        // tslint:disable-next-line:no-console
        console.log("getAll(artifact, expanded)", artifact, expanded, result)
        this.tags = result.tags
        this.groups = result.groups.map((g: string) => {
          const ex = expanded.some((e: string) => e === g)
          return {
            id: g,
            title: g,
            expanded: ex
          }
        })
      })
    )
  }

  @Output()
  public onSelectionChange: EventEmitter<any> = new EventEmitter()

  public handleSelection($event: any) {
    const artifact = this.artifact$.getValue()
    const expanded = this.expanded$.getValue()
    this.service.toggleSelected(artifact, $event.group, $event.id)

    this.getAll(artifact, expanded)
    this.onSelectionChange.emit({
      $event
    })
  }

  public handleToggleExpand(group: any) {
    const current = this.expanded$.getValue()
    const next = current.filter(g => g !== group)
    if (!current.find(g => g === group)) {
      next.push(group)
    }
    this.expanded$.next([...next])
  }
}
