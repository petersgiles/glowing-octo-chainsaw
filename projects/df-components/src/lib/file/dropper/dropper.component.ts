import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'df-file-dropper',
  templateUrl: './dropper.component.html',
  styleUrls: ['./dropper.component.scss']
})
export class DropperComponent implements OnInit {

  public files: UploadFile[] = [];

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {}

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          // tslint:disable-next-line:no-console
          console.log(droppedFile.relativePath, file);
 
          // /**
          // // You could upload it like this:
          // const formData = new FormData()
          // formData.append('logo', file, relativePath)
 
          // // Headers
          // const headers = new HttpHeaders({
          //   'security-token': 'mytoken'
          // })
 
          // this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          // .subscribe(data => {
          //   // Sanitized logo returned from backend
          // })
          // **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // tslint:disable-next-line:no-console
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    // tslint:disable-next-line:no-console
    console.log(event);
  }
 
  public fileLeave(event){
    // tslint:disable-next-line:no-console
    console.log(event);
  }

}
