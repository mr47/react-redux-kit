"use strict";

import { dataMenuItems } from '../data';

export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
export const SET_ACTIVE_MENU_BY_INDEX = "SET_ACTIVE_MENU_BY_INDEX";

const menuItems = (state = dataMenuItems, action)=>{
     switch (action.type){
         //can be implemented sorting filtering etc
         default:
             return state;
     }
};

const activeMenuItem = (state = false, action)=>{
    switch (action.type){
        case SET_ACTIVE_MENU: {
            return {
                ..._.find(dataMenuItems, ["id", +action.payload])
            }
        } break;
        case SET_ACTIVE_MENU_BY_INDEX: {
            return {
                ...dataMenuItems[action.payload]
            }
        } break;
        default:
            return state;
    }
};

export {
    menuItems, activeMenuItem
}

export default menuItems;
