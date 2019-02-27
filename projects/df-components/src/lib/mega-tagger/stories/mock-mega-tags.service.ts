import { Injectable } from "@angular/core"
import { MegaTagsService } from "../mega-tags.service"
import { Observable, of, forkJoin } from "rxjs"
import { artifacts } from "./data/artifact.data"
import { megatagsgrouped } from "./data/mega-tagger.story.data"
import { concatMap, map } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class MockMegaTagsService implements MegaTagsService {
  constructor() {
    // tslint:disable-next-line:no-console
    console.log("MockMegaTagsService")
  }

  public getAllTags(): Observable<any> {
    return of(megatagsgrouped)
  }

  public getTagsByArtifact(artifactId?: any): Observable<any> {
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

  public getAllTagsByArtifact(artifactId?: any): Observable<any> {
    return forkJoin(this.getAllTags(), this.getTagsByArtifact(artifactId)).pipe(
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

        console.log(tags)

        return {
          tags,
          groups: Object.keys(allGroups),
        }
      })
    )
  }
}
