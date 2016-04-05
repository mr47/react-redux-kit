"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loggerMiddleware = undefined;
exports.configureStore = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _dev = require('./../decorators/dev');

var _dev2 = _interopRequireDefault(_dev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = exports.loggerMiddleware = (0, _reduxLogger2.default)();

function configureStore(initialState) {
    var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware, _reduxPromise2.default), _dev2.default ? window.devToolsExtension() : function (f) {
        return f;
    }));
    if (module.hot && _dev2.default) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', function () {
            var nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}