$fruit = Import-Csv "$PSScriptRoot/../.data/fruits.csv"

$listItems = $fruit | % { 
    [PSCustomObject] @{ 
        id = (New-Guid)
        title = $_.Name
        info = $_.ScientificName
    }
} | Sort-Object -Property title

$json = $listItems | ConvertTo-Json -Depth 5

$typeDefs = @"
import { ListItem } from 'src/app/filtered-list';

export const FruitList: ListItem<any>[] = 
"@

$typeDefs + $json | Out-File -Encoding utf8 -FilePath "$PSScriptRoot/filtered-list.data.ts"