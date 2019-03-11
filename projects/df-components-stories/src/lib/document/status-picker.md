# DfStatusPicker

## API

Selector: df-status-picker
Exported As: StatusPickerComponent

### Properties

| Name                      | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| statuses: DocumentStatus[] | a list of statuses ) |

## Examples

`npm i --save @df/components`

`import { DocumentModule } from '@df/components'`

### Navigation

```html
<df-status-picker 
      [statuses]="documentStatusList$ | async"
    formControlName="status"
      >
    </df-status-picker>
```