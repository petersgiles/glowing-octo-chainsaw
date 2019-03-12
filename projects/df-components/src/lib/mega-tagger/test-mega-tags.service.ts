import { Injectable } from "@angular/core"
import { MegaTagsService } from "../../public_api"
// tslint:disable-next-line:no-implicit-dependencies
import { Observable, of } from "rxjs"


@Injectable({
  providedIn: "root"
})
export class TestMegaTagsService implements MegaTagsService {
  public toggleExpand(group: string): void {
    throw new Error("Method not implemented.");
  }
  public getAllTags = (): Observable<any> => of(null)
  public  getTagsByArtifact = (artifact?: any, options?: { filter?: any, skip?: number, take?: number }  ): Observable<any> => of(null)
  public  getAllTagsByArtifact = (artifactId?: any, options?: { filter?: any, skip?: number, take?: number } ): Observable<any>  => of(null)
  
}
