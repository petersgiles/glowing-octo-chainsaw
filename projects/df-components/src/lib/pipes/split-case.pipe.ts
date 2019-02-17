import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'splitCase'
})
export class SplitCasePipe implements PipeTransform {

    // tslint:disable-next-line:no-empty
    constructor() { }
    
  public transform(value: any, args?: any): any {

    if (typeof value !== 'string') {
      return value
    }

    return value.split(/(?=[A-Z])/).join(' ')
  }

}