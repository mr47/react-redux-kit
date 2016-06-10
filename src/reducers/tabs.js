/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import { dataTabItems } from '../data';


export const SETUP_TABS = "SETUP_TABS";
export const SETUP_TABS_BY_MENU_INDEX = "SETUP_TABS_BY_MENU_INDEX";
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB_BY_ID";
export const SET_ACTIVE_TAB_BY_INDEX = "SET_ACTIVE_TAB_BY_INDEX";
export const SET_TABS_ITEMS = "SET_TABS_ITEMS";


const initialState = { items: dataTabItems, active: false };

const tabItems = (state = initialState.items, action)=>{
    switch (action.type){
        case SETUP_TABS: {
            return _.filter(state, ["mid", +action.payload])
        } break;
        case SETUP_TABS_BY_MENU_INDEX:{
            const menuIndex = +action.payload;
            if (state[menuIndex] && menuIndex < state.length ){
                return _.filter(state, ["mid", state[menuIndex].id]);
            } else return [];
        } break;
        default:
            return state;
    }
};

const activeTabItem = (state = initialState.items, action) =>{
    switch (action.type){
        case SET_ACTIVE_TAB: {
            let filtered = _.filter(state, ["mid", +action.payload.mid]);
            let index = _.findIndex(filtered, ["id", +action.payload.tid]);
            return (index >= 0) ? { ...filtered[index], internalIndex: index }: false;
        } break;
        case SET_ACTIVE_TAB_BY_INDEX: {
            let filtered = _.filter(state, (item)=> item.mid === +action.payload.mid);
            if (action.payload.index >= 0 && action.payload.index < filtered.length) {
                return {
                    ...filtered[action.payload.index],
                    internalIndex: action.payload.index
                }
            }
            return false;
        } break;
        default: {
            return (_.isArray(state)) ? { ...state[0] } : state;
        }
    }
};

const tabs = (state = initialState, action) => {
    switch (action.type){
        case SET_TABS_ITEMS: {
            return {
                items: [...action.payload.items],
                active: _.isEmpty(action.payload.active) ? false : action.payload.active
            }
        } break;
        default: {
            return {
                items: tabItems(state.items, action),
                active: activeTabItem(state.items, action)
            }
        }
    }
};

export {
    tabs, tabItems, activeTabItem
}

export default tabs;
