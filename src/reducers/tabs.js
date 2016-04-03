/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import { tabItems } from '../data/';

export const SETUP_TABS = "SETUP_TABS";
export const SETUP_TAB_BY_ID = "SETUP_TAB_BY_ID";

const tabs = (state = [], action)=>{
    console.log('tabs, reducer', action);
    switch (action.type){
        case SETUP_TABS: {
            return _.filter(tabItems, (tab)=> tab.mid === +action.payload)
        } break;
        default:
            return state;
    }
};

const tab = (state = [], action) =>{
    switch (action.type){
        case SETUP_TAB_BY_ID: {
            return _.filter(tabItems, (tab)=> tab.id === +action.payload)
        } break;
        default:
            return _.filter(tabItems, (tab)=> tab.id === +action.payload);
    }
};

export {
    tabs
}

export default tabs;
