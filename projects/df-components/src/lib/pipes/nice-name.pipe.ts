import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'niceName'
})
export class NiceNamePipe implements PipeTransform {

  // tslint:disable-next-line:no-empty
  constructor() { }

  public transform(value: any, args?: any): any {

    let first = 'Jon'
    let last = 'Doe'

    if (value) {
      const split = value.replace(' ', '').split(',')
      first = split[1]
      last = split[0]
    }

    return `${first} ${last}`
  }

}
