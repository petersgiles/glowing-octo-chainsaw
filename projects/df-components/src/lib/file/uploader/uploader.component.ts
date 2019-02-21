import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core"
import { NG_VALUE_ACCESSOR } from "@angular/forms"
import { FileItem } from "../models/file-item"

// tslint:disable-next-line:no-empty
const noop = () => {}

@Component({
  selector: "df-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploaderComponent,
      multi: true
    }
  ]
})
export class UploaderComponent implements OnInit {
  /**
   * Counter used to create unique ids for file-uploader components
   */
  public static fileUploaderCount = 0
  /**
   * Accessible text for the button that opens the upload window.
   */
  @Input() public buttonText = "Open"
  /**
   * Text set to the title
   */
  @Input() public title: string
  /**
   * Text set to the description
   */
  @Input() public description: string
  /**
   * Specify the types of files that the input should be able to receive
   */
  @Input() public accept = []
  /**
   * Set to `false` to tell the component to only accept a single file on upload.
   *
   * Defaults to `true`. Accepts multiple files.
   */
  @Input() public multiple = true
  /**
   * Provides a unique id for the underlying <input> node
   */
  @Input() public fileUploaderId = `file-uploader-${
    UploaderComponent.fileUploaderCount
  }`
  /**
   * Maintains a reference to the view DOM element of the underlying <input> node
   */
  @ViewChild("fileInput") public fileInput
  /**
   * The list of files that have been submitted to be uploaded
   */
  @Input() public files: Set<FileItem>
  @Output() public filesChange = new EventEmitter<any>()

  protected onTouchedCallback: () => void = noop
  protected onChangeCallback: (_: Set<FileItem>) => void = noop

  constructor() {
    UploaderComponent.fileUploaderCount =
      UploaderComponent.fileUploaderCount + 1
  }

  /**
   * Specifies the property to be used as the return value to `ngModel`
   */
  get value(): Set<FileItem> {
    return this.files
  }
  set value(v: Set<FileItem>) {
    if (v !== this.files) {
      this.files = v
      this.onChangeCallback(v)
    }
  }

  public ngOnInit() {
    // overrides the undefined files value set by the user
    if (!this.files) {
      this.files = new Set()
      this.filesChange.emit(this.files)
    }
  }

  public onBlur() {
    this.onTouchedCallback()
  }

  /**
   * Propagates the injected `value`.
   */
  public writeValue(value: Set<FileItem>) {
    if (value !== this.value) {
      this.files = value
    }
  }

  public onFilesAdded() {
    const files = this.fileInput.nativeElement.files
    for (const file of files) {
      const fileItem: FileItem = {
        file,
        uploaded: false,
        state: "edit"
      }
      this.files.add(fileItem)
      this.filesChange.emit(this.files)
    }

    this.value = this.files
  }

  public removeFile(fileItem) {
    this.files.delete(fileItem)
    this.fileInput.nativeElement.value = ""
    this.filesChange.emit(this.files)
  }

  /**
   * Registers the injected function to control the touch use of the `FileUploader`.
   */
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }
  /**
   * Sets a method in order to propagate changes back to the form.
   */
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }
}
