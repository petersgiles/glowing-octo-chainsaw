import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  // tslint:disable-next-line:no-empty
  constructor() {}
  public transform(value: string, args: string[]): string {
    const limit = args && args.length > 0 ? parseInt(args[0], 10) : 20
    const trail = args && args.length > 1 ? args[1] : "..."
    return value.length > limit ? value.substring(0, limit) + trail : value
  }
}
