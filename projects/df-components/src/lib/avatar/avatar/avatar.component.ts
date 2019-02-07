import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'df-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent  implements OnInit, OnChanges {


  // tslint:disable-next-line:no-empty
  constructor() {}

  // tslint:disable-next-line:variable-name
  private _email: string
  // tslint:disable-next-line:variable-name
  private _name: string

  @Input('email')
  set email(val: string) {
    this._email = val
  }

  get email(): string {
    return this._email
  }

  @Input('name')
  set name(val: string) {
    this._name = val
  }

  get name(): string {
    return this._name
  }

  @Input('size') public size = 100

  @Input('background') public background = this.getRandomColor()

  @Input('displayType') public displayType = 'none'

  public letter = '?'

  @Input('defaultProtocol') public defaultProtocol: string = null

  public fontSize = 49
  public fontColor = '#FFFFFF'
  public props: any = null

  public getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('')
    let color = '#'
    for (let n = 0; n < 6; n = n + 1) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  public getLetterColor(letters): string {

    const padded = letters.padEnd(3, '~').substring(0, 3)

    const color = this.ascii_to_hexa(padded)
    return `#${color}`
  }

  public ascii_to_hexa(str) {
    const arr1 = []
    for (let n = 0, l = str.length; n < l; n = n + 1) {
      const hex = Number(str.charCodeAt(n)).toString(16)
      arr1.push(hex)
    }
    return arr1.join('')
  }

  /**
   * Set the avatar letter based on full name or email
   */
  public getLetter(): void {
    if (this.name && this.name.length) {
      const nameInitials = this.name.match(/\b(\w)/g)
      if (nameInitials) {
        const nameLetters = nameInitials.slice(0, 3).join('')
        this.letter = nameLetters.toUpperCase()
      } else {
        this.letter = this.name[0]
      }
    } else if (this.email && this.email.length) {
      const emailInitials = this.email.split('@')[0].match(/\b(\w)/g)
      const emailLetters = emailInitials.slice(0, 3).join('')
      this.letter = emailLetters.toUpperCase()
    }

    this.background = this.getLetterColor(this.letter)
  }

  public setCssProps() {
    this.fontSize = (39 * this.size) / 100
    this.props = {
      size: `${this.size}px`,
      lineheight: `${this.size}px`,
      background: this.background,
      fontSize: `${this.fontSize}px`
    }

    switch (this.displayType) {
      case 'rounded':
        this.props.borderradius = '5%'
        break
      case 'circle':
        this.props.borderradius = '50%'
        break
      default:
        this.props.borderradius = '0'
    }
  }

  /**
   * Set avatar size, background and display type
   */
  public ngOnInit() {
    this.setCssProps()
    this.getLetter()
  }

  /**
   * Updates avatar image and letter on email updates
   */
  public ngOnChanges() {
    this.getLetter()
  }

}
