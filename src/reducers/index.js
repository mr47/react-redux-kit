/**
 * Created by mr470 on 02.04.2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { counter } from './counter';
import { menu } from './menu';
import { tabs } from './tabs';

const rootReducer = combineReducers({
    counter,
    menu,
    tabs,
    routing: routerReducer
});

export * from './counter';
export * from './menu';
export * from './tabs';

export default rootReducer;
