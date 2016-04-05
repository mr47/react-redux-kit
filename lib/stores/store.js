"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = exports.history = undefined;

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _configureStore = require('./configureStore');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore.configureStore)(_initialState2.default);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

exports.history = history;
exports.store = store;
exports.default = store;