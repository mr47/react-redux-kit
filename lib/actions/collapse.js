'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupCollapsed = exports.toggleCollapse = exports.setupCollapseByTabIndex = exports.setupCollapse = undefined;

var _reduxActions = require('redux-actions');

var _reducers = require('../reducers');

/**
 * Created by mr470 on 03.04.2016.
 */

var setupCollapse = exports.setupCollapse = (0, _reduxActions.createAction)(_reducers.SETUP_COLLAPSE);
var setupCollapseByTabIndex = exports.setupCollapseByTabIndex = (0, _reduxActions.createAction)(_reducers.SETUP_COLLAPSE_BY_TAB_INDEX);
var toggleCollapse = exports.toggleCollapse = (0, _reduxActions.createAction)(_reducers.TOGGLE_COLLAPSE);
var setupCollapsed = exports.setupCollapsed = (0, _reduxActions.createAction)(_reducers.SETUP_COLLAPSED);