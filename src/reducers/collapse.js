/**
 * Created by mr470 on 03.04.2016.
 */
"use strict";

import { collapseItems } from '../data/';

export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';
export const SETUP_COLLAPSE = 'SETUP_COLLAPSE';
export const SETUP_COLLAPSED = 'SETUP_COLLAPSED';

const collapsedItems = (state = [], action)=>{
    switch (action.type){
        case TOGGLE_COLLAPSE: {
            let index = _.indexOf(state, +action.payload);
            if (index < 0){
                //not find add set item to collapse
                return [...state, action.payload];
            } else {
                return _.filter(state, (item)=> item !== +action.payload)
            }
        } break;
        case SETUP_COLLAPSED: {
            return action.payload?[ ...action.payload ]:state;
        } break;
        default:
            return state;
    }
};

const collapse = (state = [], action)=>{
    switch (action.type){
        case SETUP_COLLAPSE: {
            return _.filter(collapseItems, (item)=>( item.tid === +action.payload.tid && item.mid === +action.payload.mid ));
        } break;
        default:
            return state;
    }
};

export {
    collapse, collapsedItems
}

export default collapse;
