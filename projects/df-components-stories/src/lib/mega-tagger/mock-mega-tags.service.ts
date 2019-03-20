import { Injectable } from "@angular/core"
import { MegaTagsService } from "../../../../df-components/src/public_api"
import { Observable, of, forkJoin, BehaviorSubject } from "rxjs"
import { artifactGroups } from "./data/artifact.data"
import { megatagsgrouped } from "./data/mega-tagger.story.data"
import { map } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class MockMegaTagsService implements MegaTagsService {
  public artifactsGroups$: BehaviorSubject<any> = new BehaviorSubject(
    artifactGroups
  )

  public expandedGroups: string[]

  constructor() {
    // tslint:disable-next-line:no-console
    console.log("MockMegaTagsService")
  }

  public toggleExpand(group: string) {
    const found = this.expandedGroups.find(g => g === group)
    this.expandedGroups = [...this.expandedGroups.filter(g => g === group)]

    if (!found) {
      this.expandedGroups.push(group)
    }
  }

  public getAllTags(): Observable<any> {
    return of(megatagsgrouped)
  }

  public getTagsByArtifact(
    artifactId?: any,
    options?: { group?: string; filter?: any; skip?: number; take?: number }
  ): Observable<any> {
    const defaults = {
      ...{
        take: 10
      },
      ...options
    }

    const groups = this.artifactsGroups$.getValue()

    const tagGroups = Object.keys(groups[artifactId] || {}).reduce(
      (acc, group) => {
        const groupKeys = groups[artifactId][group]
        acc[group] = megatagsgrouped[group]
          .filter((f: { id: any; }) => groupKeys.some((gk: any) => f.id === gk))
          .map((gk: any) => ({ ...gk, selected: true }))
        return acc
      },
      {}
    )

    return of(tagGroups)
  }

  public toggleSelected(artifactId: string, group: string, tag: string) {
    const groups = this.artifactsGroups$.getValue()

    let theGroup = groups[artifactId][group] || []

    if (theGroup.find((t: string) => t === tag)) {
      theGroup = theGroup.filter((t: string) => t !== tag)
    } else {
      theGroup.push(tag)
    }
    groups[artifactId][group] = theGroup
    this.artifactsGroups$.next(groups)
  }

  public getAllTagsByArtifact(
    artifactId?: any,
    options?: { filter?: any; skip?: number; take?: number }
  ): Observable<any> {
    return forkJoin(
      this.getAllTags(),
      this.getTagsByArtifact(artifactId, options)
    ).pipe(
      map(([allGroups, artifactgrps]) => {



    // tslint:disable-next-line:no-console
    console.log("getAllTagsByArtifact", allGroups, artifactgrps)

        const groups = Object.keys(artifactgrps)

        const tags = groups.reduce(
          (acc, group) => {
            acc[group] = acc[group].map((tag: { id: any; }) => {
              return {
                ...tag,
                selected: artifactgrps[group].some((ag: { id: any; }) => ag.id === tag.id)
              }
            })
            return acc
          },
          { ...allGroups }
        )

        // tslint:disable-next-line:no-console
        console.log(tags)

        return {
          tags,
          groups: Object.keys(allGroups)
        }
      })
    )
  }
}
