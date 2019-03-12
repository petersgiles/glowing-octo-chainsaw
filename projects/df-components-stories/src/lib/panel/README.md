# DfExpanderPanel

## API

Selector: df-expander-panel
Exported As: ExpanderPanelComponent

### Properties

| Name                | Description                           |
| ------------------- | ------------------------------------- |
| title: string       | sets the title (changes to titleCase) |
| expanded: boolean   | sets the panel to expanded            |
| expandable: boolean | toggles the panel expand              |
| readOnly: boolean   | sets to read only                     |
| background: string  | hexColour defaults to '#CFD8DC'       |

### Events

| Name                | Description              |
| ------------------- | ------------------------ |
| onToggleExpand: any | emits new expanded state |

## Examples

`npm i --save @df/components`

`import { PanelModule } from '@df/components'`

### Read Only

```html
<df-expander-panel
  title="read me expander panel"
  [expanded]="expanded$ | async"
  (onToggleExpand)="handleToggleExpand($event)"
>
  Read Me
  <div panel-content-edit>Should not see edit content</div>
</df-expander-panel>
```

### Edit

```html
<df-expander-panel
  title="edit me expander panel"
  [expanded]="expanded$ | async"
  (onToggleExpand)="handleToggleExpand($event)"
  [readOnly]="false"
>
  Should NOT see readonly content
  <div panel-content-edit>Edit content</div>
</df-expander-panel>
```

### Title Bar Buttons

```html
<df-expander-panel
  title="edit me expander panel"
  [expanded]="expanded$ | async"
  (onToggleExpand)="handleToggleExpand($event)"
  [readOnly]="false"
>
  Should NOT see readonly content
  <div panel-content-edit>Edit content</div>
</df-expander-panel>
```

### Background Colour

```html
<df-expander-panel
  title="background colour panel"
  background="#000000"
  expanded="true"
>
  some content
</df-expander-panel>
```

### Title Bar Only

```html
  <df-expander-panel title="Title Bar Only" [expandable]="false" >
    <ng-container panel-buttons>
      <df-button title="Add Item" (onClick)="handleEvent($event, 'Add Item Clicked')" ></df-button>
    </ng-container>
    no content shown this is just a title bar
    </df-expander-panel>
```