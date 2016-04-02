"use strict";

import { menuItems } from '../data/';

const menu = (state = menuItems, action)=>{
     switch (action.type){
         //can be implemented sorting filtering etc
         default:
             return state;
     }
};

export {
    menu
}

export default menu;
