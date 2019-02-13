# DfAvatar

## API

Selector: df-avatar  
Exported As: AvatarComponent

### Properties

| Name                | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| email: string       | The Email of the User                                                                              |
| name: string        | The Name of the User                                                                               |
| size: number        | The bigness of the avatar defaults to 100 (35 is a good size)                                      |
| background: string  | Defaults to a random colour. Use any standard web colour format: rgb(84, 70, 126), #333333, 'pink' |
| displayType: string | 'rounded', 'circle'                                                                                |

## Examples

`npm i --save @df/components`

`import { AvatarModule } from '@df/components'`

### Circle

```html
<df-avatar name="Guest" displayType="circle"></df-avatar>
```

### Rounded

```html
<df-avatar name="Guest" displayType="rounded" size="35"></df-avatar>
```

### Square

```html
<df-avatar name="Guest" size="50"></df-avatar>
```
