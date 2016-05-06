/**
 * Created by mr470 on 02.04.2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { counter } from './counter';
import { menu } from './menu';
import { tabItems, activeTabItem } from './tabs';
import { collapseItems, activeCollapsedItems } from './collapse';

const rootReducer = combineReducers({
    counter,
    menu,
    //menuItems,
    //activeMenuItem,
    tabItems,
    activeTabItem,
    collapseItems,
    activeCollapsedItems,
    routing: routerReducer
});

export * from './counter';
export * from './menu';
export * from './tabs';
export * from './collapse';

export default rootReducer;
