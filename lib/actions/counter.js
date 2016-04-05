'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrement = exports.increment = undefined;

var _reduxActions = require('redux-actions');

var _reducers = require('../reducers');

/**
 * Created by mr470 on 02.04.2016.
 */

var increment = exports.increment = (0, _reduxActions.createAction)(_reducers.INCREMENT);
var decrement = exports.decrement = (0, _reduxActions.createAction)(_reducers.DECREMENT);