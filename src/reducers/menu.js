"use strict";

import { dataMenuItems } from '../data';

export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";

const menuItems = (state = dataMenuItems, action)=>{
     switch (action.type){
         //can be implemented sorting filtering etc
         default:
             return state;
     }
};

const activeMenuItem = (state = dataMenuItems[0], action)=>{
    switch (action.type){
        case SET_ACTIVE_MENU: {
            return _.find(dataMenuItems, ["mid", +action.payload])
        } break;
        default:
            return state;
    }
};

export {
    menuItems, activeMenuItem
}

export default menuItems;
