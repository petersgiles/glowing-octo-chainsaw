import { Injectable } from "@angular/core"
// tslint:disable-next-line:no-implicit-dependencies
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export abstract class MegaTagsService {
  public abstract getTagsByArtifact(artifact?: any, options?: { filter?: any, skip?: number, take?: number }  ): Observable<any>
  public abstract getAllTagsByArtifact(artifactId?: any, options?: { filter?: any, skip?: number, take?: number } ): Observable<any> 
  public abstract getAllTags(): Observable<any>
  public abstract toggleExpand(group: string): void
  public abstract toggleSelected(artifact: string, group: string, tag: string): void
}
