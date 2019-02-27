import { MegaTag } from '../../models/mega-tag';
import { electorates } from './electorates.data';
import { states } from './state.data';

export const megatagsgrouped = {
    electorates: [...electorates],
    states: [...states]
}

export const allmegatags = Object.keys(megatagsgrouped).reduce((acc, item) => {
        acc.concat(megatagsgrouped[item])
        return acc
    }, [])
