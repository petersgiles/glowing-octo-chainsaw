# DfFileUploader

## API

Selector: df-uploader
Exported As: StatusPickerComponent

### Properties

| Name                   | Description        |
| ---------------------- | ------------------ |
| list: DocumentStatus[] | a list of statuses |

### Events

| Name                     | Description             |
| ------------------------ | ----------------------- |
| onSelect: DocumentStatus | emits the selected node |

## Examples

`npm i --save @df/components`

`import { DocumentModule } from '@df/components'`

### Navigation

```html
<df-status-picker
  [list]="documentStatusList$ | async"
  (onSelect)="handleAction($event)"
>
</df-status-picker>
```
