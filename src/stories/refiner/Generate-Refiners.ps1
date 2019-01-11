$fruit = Import-Csv "$PSScriptRoot/../.data/fruits.csv"

$groups = ( 
    [PSCustomObject]@{
        id       = (New-Guid)
        title    = "Genera"
        children = $fruit | % {
            $_.ScientificName.Split(' ')[0]
        } | Group-Object | % {
            [PSCustomObject]@{
                id    = (New-Guid)
                title = $_.Name
                count = $_.Count
            }
        }
    }, [PSCustomObject]@{
        id       = (New-Guid)
        title    = "Starts with"
        children = $fruit | % {
            $_.Name.Substring(0, 1)
        } | Group-Object | % {
            [PSCustomObject]@{
                id    = (New-Guid)
                title = $_.Name
                count = $_.Count
            }
        }
    }
)

$json = $groups | ConvertTo-Json -Depth 5

$typeDefs = @"
import { RefinerGroup } from 'src/app/refiner';

export const FruitGroups: RefinerGroup[] = 
"@

$typeDefs + $json | Out-File -Encoding utf8 -FilePath "$PSScriptRoot/refiner.data.ts"