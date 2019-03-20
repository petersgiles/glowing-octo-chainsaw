import { MegaTag } from "../../../../../df-components/src/public_api"
import { sortBy } from '../../../../../df-components/src/lib/utils/array-to-tree';

export const states: MegaTag[] = [
    {
        "id": "NSW",
        "group": "states",
        "caption": "NSW",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "QLD",
        "group": "states",
        "caption": "QLD",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "TAS",
        "group": "states",
        "caption": "TAS",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "SA",
        "group": "states",
        "caption": "SA",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "VIC",
        "group": "states",
        "caption": "VIC",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "WA",
        "group": "states",
        "caption": "WA",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
    {
        "id": "NT",
        "group": "states",
        "caption": "NT",
        "data": {},
        "colour": "Crimson",
        "order": 99,
        "selected": false,
        "icon": "place"
    },
].sort(sortBy('caption'))

