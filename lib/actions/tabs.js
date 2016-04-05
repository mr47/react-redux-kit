'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActiveTabByIndex = exports.setActiveTab = exports.setupTabsByMenuIndex = exports.setupTabs = undefined;

var _reduxActions = require('redux-actions');

var _reducers = require('../reducers');

/**
 * Created by mr470 on 02.04.2016.
 */

var setupTabs = exports.setupTabs = (0, _reduxActions.createAction)(_reducers.SETUP_TABS);
var setupTabsByMenuIndex = exports.setupTabsByMenuIndex = (0, _reduxActions.createAction)(_reducers.SETUP_TABS_BY_MENU_INDEX);
var setActiveTab = exports.setActiveTab = (0, _reduxActions.createAction)(_reducers.SET_ACTIVE_TAB);
var setActiveTabByIndex = exports.setActiveTabByIndex = (0, _reduxActions.createAction)(_reducers.SET_ACTIVE_TAB_BY_INDEX);