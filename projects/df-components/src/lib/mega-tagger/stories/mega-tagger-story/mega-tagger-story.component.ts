import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { MegaTagsService } from "../../mega-tags.service"
import { BehaviorSubject, Observable, of, Subscription } from "rxjs"
import { withLatestFrom, map, switchMap, tap } from "rxjs/operators"

@Component({
  selector: "df-mega-tagger-story",
  templateUrl: "./mega-tagger-story.component.html",
  styleUrls: ["./mega-tagger-story.component.scss"]
})
export class MegaTaggerStoryComponent implements OnInit {
  public tags: any

  public artifact$: BehaviorSubject<any> = new BehaviorSubject(null)
  public expanded$: BehaviorSubject<any[]> = new BehaviorSubject([])

  public groups: { id: string; title: string; expanded: boolean; }[];
  public groupsSubscription$: Subscription;

  public set artifact(val) {
    this.artifact$.next(val)
  }

  // tslint:disable-next-line:no-empty
  constructor(private service: MegaTagsService) {}

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
    this.groupsSubscription$ = this.expanded$.pipe(
      withLatestFrom(this.artifact$),
      switchMap(([expanded, artifact]) =>
        this.service.getAllTagsByArtifact(artifact).pipe(
          map((result: { tags: any; groups: any[] }) => {
            this.tags = result.tags
            this.groups = result.groups.map((g: string) => {
              const ex = expanded.some(e => e === g)
              return {
                id: g,
                title: g,
                expanded: ex
              }
            })
          })
        )
      )
    ).subscribe()
  }

  @Output()
  public onSelectionChange: EventEmitter<any> = new EventEmitter()

  public handleToggleExpand(group) {
    const current = this.expanded$.getValue()
    const next = current.filter(g => g !== group)
    if (!current.find(g => g === group)) {
      next.push(group)
    }
    this.expanded$.next([...next])
  }
}
