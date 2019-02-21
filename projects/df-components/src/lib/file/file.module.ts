import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader/uploader.component';
import { FileComponent } from './file/file.component';
import { LoadingComponent } from './loading/loading.component';

const COMPONENTS = [FileComponent, LoadingComponent, UploaderComponent]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FileModule { }
