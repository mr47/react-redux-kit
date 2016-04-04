/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import { dataTabItems } from '../data';

export const SETUP_TABS = "SETUP_TABS";
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB_BY_ID";
export const SET_ACTIVE_TAB_BY_INDEX = "SET_ACTIVE_TAB_BY_INDEX";

const tabItems = (state = [], action)=>{
    switch (action.type){
        case SETUP_TABS: {
            return _.filter(dataTabItems, ["mid", +action.payload])
        } break;
        default:
            return state;
    }
};

const activeTabItem = (state = false, action) =>{
    switch (action.type){
        case SET_ACTIVE_TAB: {
            let filtered = _.filter(dataTabItems, ["mid", +action.payload.mid]);
            let index = _.findIndex(filtered, ["id", +action.payload.tid]);
            return {
                ...filtered[index],
                internalIndex: index
            }
        } break;
        case SET_ACTIVE_TAB_BY_INDEX: {
            let filtered = _.filter(dataTabItems, (item)=> item.mid === +action.payload.mid);
            if (action.payload.index >= 0 && action.payload.index < filtered.length) {
                return {
                    ...filtered[action.payload.index],
                    internalIndex: action.payload.index
                }
            } else return false;
        }break;
        default:
            return state;
    }
};

export {
    tabItems, activeTabItem
}

export default tabItems;
