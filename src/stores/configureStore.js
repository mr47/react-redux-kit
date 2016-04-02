"use strict";

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import rootReducer from './../reducers'
import dev from './../decorators/dev';


export const loggerMiddleware = createLogger();

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                promiseMiddleware
            ),
            dev ? window.devToolsExtension() : f => f
        )
    );
    if (module.hot && dev) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}
