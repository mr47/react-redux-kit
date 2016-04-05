'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActiveMenuByIndex = exports.setActiveMenu = undefined;

var _reduxActions = require('redux-actions');

var _reducers = require('../reducers');

/**
 * Created by mr470 on 04.04.2016.
 */

var setActiveMenu = exports.setActiveMenu = (0, _reduxActions.createAction)(_reducers.SET_ACTIVE_MENU);
var setActiveMenuByIndex = exports.setActiveMenuByIndex = (0, _reduxActions.createAction)(_reducers.SET_ACTIVE_MENU_BY_INDEX);