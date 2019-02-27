import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { MegaTag } from "./models/mega-tag"

@Injectable({
  providedIn: "root"
})
export abstract class MegaTagsService {
  public abstract getTagsByArtifact(artifact?: any ): Observable<any>
  public abstract getAllTagsByArtifact(artifactId?: any): Observable<any> 
  public abstract getAllTags(): Observable<any>
}
