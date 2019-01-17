$fruit = Import-Csv "$PSScriptRoot/../../.data/fruits.csv"

$groups = ( 
    [PSCustomObject]@{
        id       = (New-Guid)
        title    = "Genera"
        refiners = $fruit | % {
            $_.ScientificName.Split(' ')[0]
        } | Group-Object | % {
            [PSCustomObject]@{
                id    = (New-Guid)
                title = $_.Name
                count = $_.Count
            }
        } | Sort-Object -Property title
    }, [PSCustomObject]@{
        id       = (New-Guid)
        title    = "Starts with"
        refiners = $fruit | % {
            $_.Name.Substring(0, 1)
        } | Group-Object | % {
            [PSCustomObject]@{
                id    = (New-Guid)
                title = $_.Name
                count = $_.Count
            }
        }
    } | Sort-Object -Property title
)

$json = $groups | ConvertTo-Json -Depth 5

$typeDefs = @"
import { RefinerGroup } from '../index';

export const FruitGroups: RefinerGroup[] = 
"@

$typeDefs + $json | Out-File -Encoding utf8 -FilePath "$PSScriptRoot/refiner.data.ts"