/**
 * Created by mr470 on 02.04.2016.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter } from './counter';
export * from './counter';

const rootReducer = combineReducers({
    counter,
    routing: routerReducer
});

export default rootReducer;
