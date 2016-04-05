'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _counter = require('./counter');

Object.keys(_counter).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _counter[key];
        }
    });
});

var _menu = require('./menu');

Object.keys(_menu).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _menu[key];
        }
    });
});

var _tabs = require('./tabs');

Object.keys(_tabs).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _tabs[key];
        }
    });
});

var _collapse = require('./collapse');

Object.keys(_collapse).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _collapse[key];
        }
    });
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

/**
 * Created by mr470 on 02.04.2016.
 */


var rootReducer = (0, _redux.combineReducers)({
    counter: _counter.counter,
    menuItems: _menu.menuItems,
    activeMenuItem: _menu.activeMenuItem,
    tabItems: _tabs.tabItems,
    activeTabItem: _tabs.activeTabItem,
    collapseItems: _collapse.collapseItems,
    activeCollapsedItems: _collapse.activeCollapsedItems,
    routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;