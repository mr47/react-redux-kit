/**
 * Created by mr470 on 03.04.2016.
 */
"use strict";

import { dataCollapseItems, dataTabItems } from '../data';

export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';
export const SETUP_COLLAPSE_BY_TAB_INDEX = 'SETUP_COLLAPSE_BY_TAB_INDEX';
export const SETUP_COLLAPSE = "SETUP_COLLAPSE";
export const SETUP_COLLAPSED = 'SETUP_COLLAPSED';

const activeCollapsedItems = (state = [], action)=>{
    switch (action.type){
        case TOGGLE_COLLAPSE: {
            let index = _.indexOf(state, action.payload.toString());
            if (index < 0){
                //not find add set item to collapse
                return [...state, action.payload.toString()];
            } else {
                return _.filter(state, (item)=> item !== action.payload.toString())
            }
        } break;
        case SETUP_COLLAPSED: {
            return action.payload?[ ...action.payload ]:state;
        } break;
        default:
            return state;
    }
};

const collapseItems = (state = [], action)=>{
    switch (action.type){
        case SETUP_COLLAPSE: {
            return _.filter(dataCollapseItems, (item)=>( item.tid === +action.payload.tid && item.mid === +action.payload.mid ));
        } break;
        case SETUP_COLLAPSE_BY_TAB_INDEX:{
            let filteredTabs = _.filter(dataTabItems, ["mid", +action.payload.mid]);
            let tab = filteredTabs[+action.payload.index];
            return _.filter(dataCollapseItems, (item)=>( item.tid === tab.id && item.mid === +action.payload.mid ));
        } break;
        default:
            return state;
    }
};

export {
    collapseItems, activeCollapsedItems
}

export default collapseItems;
