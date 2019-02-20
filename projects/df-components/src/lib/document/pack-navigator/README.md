# DfPackNavigator

## API

Selector: df-pack-navigator
Exported As: PackNavigatorComponent

### Properties

| Name                      | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| list: NavigatorTreeNode[] | a list of nodes (the component will turn them into a tree and manage some internal state to do with a node being active ) |

### Events

| Name                        | Description                       |
| --------------------------- | --------------------------------- |
| onSelect: NavigatorTreeNode | emits the leaf node when selected |

## Examples

`npm i --save @df/components`

`import { DocumentModule } from '@df/components'`

### Navigation

```html
<df-pack-navigator [list]="list$ | async" (onSelect)="handleAction($event)"></df-pack-navigator>
```