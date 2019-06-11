import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { UploaderComponent } from "./uploader/uploader.component"
import { MdcButtonModule, MdcIconModule, MdcListModule } from "@angular-mdc/web"
import { HttpClientModule } from "@angular/common/http"
import { NgxFileDropModule } from "ngx-file-drop"
import { DropperComponent } from "./dropper/dropper.component"

const COMPONENTS = [UploaderComponent, DropperComponent]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    MdcButtonModule,
    MdcIconModule,
    MdcListModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FileModule {}
