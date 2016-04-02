/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

import { tabItems } from '../data/';

export const SETUP_TABS = "SETUP_TABS";

const tabs = (state = [], action)=>{
    console.log('tabs, reducer', action);
    switch (action.type){
        case SETUP_TABS: {
            return _.filter(tabItems, (tab)=> tab.mid === action.payload)
        } break;
        default:
            return state;
    }
};

export {
    tabs
}

export default tabs;
