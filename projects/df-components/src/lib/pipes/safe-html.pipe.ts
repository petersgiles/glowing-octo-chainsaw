import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  public transform(value) {
    if (value) {
      return this.sanitized.bypassSecurityTrustHtml(value)
    }
  }

}
