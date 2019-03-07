import { Injectable } from "@angular/core"
import { MegaTagsService } from "../../../../df-components/src/public_api"
import { Observable, of, forkJoin } from "rxjs"
import { artifacts } from "./data/artifact.data"
import { megatagsgrouped } from "./data/mega-tagger.story.data"
import { map } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class MockMegaTagsService implements MegaTagsService {

  public expandedGroups: string[]

  constructor() {
    // tslint:disable-next-line:no-console
    console.log("MockMegaTagsService")
  }

  public toggleExpand(group: string) {

    const found = this.expandedGroups.find( g=> g === group)
    this.expandedGroups = [ ...this.expandedGroups.filter( g=> g === group) ]

    if(!found) {
      this.expandedGroups.push(group)
    }
  }

  public getAllTags(): Observable<any> {
    return of(megatagsgrouped)
  }

  public getTagsByArtifact(artifactId?: any, options?: { group?: string, filter?: any, skip?: number, take?: number } ): Observable<any> {

    const defaults =  { ...{
      take: 10
    }, ...options}

    // tslint:disable-next-line:no-console
    console.log("defaults", defaults)

    const tagGroups = Object.keys(artifacts[artifactId] || {}).reduce(
      (acc, item) => {
        const groupKeys = artifacts[artifactId][item]
        acc[item] = megatagsgrouped[item]
          .filter(f => groupKeys.some(gk => f.id === gk))
          .map(gk => ({ ...gk, selected: true }))
        return acc
      },
      {}
    )

    return of(tagGroups)
  }

  public getAllTagsByArtifact(artifactId?: any, options?: { filter?: any, skip?: number, take?: number } ): Observable<any> {
    return forkJoin(this.getAllTags(), this.getTagsByArtifact(artifactId, options)).pipe(
      map(([allGroups, artifactGroups]) => {

        const groups = Object.keys(artifactGroups)

        const tags = groups.reduce((acc, group) => {
          acc[group] = acc[group].map(tag => {
            return {
              ...tag,
              selected: artifactGroups[group].some(ag => ag.id === tag.id)
            }
          })
          return acc
        }, {...allGroups})

        // tslint:disable-next-line:no-console
        console.log(tags)

        return {
          tags,
          groups: Object.keys(allGroups),
        }
      })
    )
  }
}
