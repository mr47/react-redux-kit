"use strict";

import initialState from './initialState';
import { configureStore } from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

export {
    history, store
}
export default store;
