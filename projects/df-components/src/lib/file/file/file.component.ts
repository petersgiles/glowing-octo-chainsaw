import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileItem } from '../models/file-item';

@Component({
  selector: 'df-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent  {

  @Input() 
  public fileItem: FileItem;

  @Output() 
  public remove = new EventEmitter();
}
