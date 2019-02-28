import { MegaTag } from '../../models/mega-tag';
import { electorates } from './electorates.data';
import { states } from './state.data';

export const megatagsgrouped = {
    states: [...states],
    electorates: [...electorates],
}

export const allmegatags = Object.keys(megatagsgrouped).reduce((acc, item) => {
        acc.concat(megatagsgrouped[item])
        return acc
    }, [])
