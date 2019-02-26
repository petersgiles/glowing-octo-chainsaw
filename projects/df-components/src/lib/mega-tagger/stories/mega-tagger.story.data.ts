import { MegaTag } from '../models/mega-tag';
import { electorates } from './electorates.data';
import { states } from './state.data';

export const megatagsgroupd = {
    electorates: [...electorates],
    states: [...states]
}

export const allmegatags = Object.keys(megatagsgroupd).reduce((acc, item) => {
        acc.concat(megatagsgroupd[item])
        return acc
    }, [])
