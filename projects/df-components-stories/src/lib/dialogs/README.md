# DfDialogs

```typescript

@Component({
  ...
})
export class YourComponent {
  constructor( public dialog: MdcDialog ) {}

public openDialog() {

    const dialogRef = this.dialog.open(DialogAreYouSureComponent)

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(result => {
        ...
      })
  }
}

```
