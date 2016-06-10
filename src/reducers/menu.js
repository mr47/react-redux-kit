"use strict";

import { dataMenuItems } from '../data';

export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
export const SET_ACTIVE_MENU_BY_INDEX = "SET_ACTIVE_MENU_BY_INDEX";
export const SET_MENU_ITEMS = "SET_MENU_ITEMS";

const initialState = {items: dataMenuItems, active: false};

const menuItems = (state = initialState.items, action)=>{
     switch (action.type){
         //can be implemented sorting filtering etc
         default:
             return state;
     }
};

const activeMenuItem = (state = initialState.items, action)=>{
    switch (action.type){
        case SET_ACTIVE_MENU: {
            const index = _.findIndex(state, ["id", +action.payload]);
            if (index !== -1){
                return state[index]
            } else {
                return state[0];
            }
        } break;
        case SET_ACTIVE_MENU_BY_INDEX: {
            const index = +action.payload;
            if (state && index >= 0 && index < state.length){
                return {
                    ...state[action.payload]
                }
            }
            return false;
        } break;
        default: {
            return _.isArray(state) ? false : state;
        }
    }
};

const menu = (state = initialState, action)=>{
    switch (action.type){
        case SET_MENU_ITEMS: {
            return {
                items: [...action.payload.items],
                active: _.isEmpty(action.payload.active) ? false : action.payload.active
            };
        } break;
        default: {
            return {
                items: menuItems(state.items, action),
                active: activeMenuItem(state.items, action)
            };
        }
    }
};

export {
    menuItems, activeMenuItem, menu
}

export default menu;
