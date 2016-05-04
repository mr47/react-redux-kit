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

const activeMenuItem = (state = dataMenuItems, action)=>{
    switch (action.type){
        case SET_ACTIVE_MENU: {
            return {
                ..._.find(state, ["id", +action.payload])
            }
        } break;
        case SET_ACTIVE_MENU_BY_INDEX: {
            return {
                ...state[action.payload]
            }
        } break;
        default: {
            if (_.isArray(state)) return { ...state[0] };
            return { ...state };
        }
    }
};

export {
    menuItems, activeMenuItem
}

export default menuItems;
