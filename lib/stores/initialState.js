"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dev = require('./../decorators/dev');

var _dev2 = _interopRequireDefault(_dev);

var _data = require('../data/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

// Initial state manager
var initialStateManager = function initialStateManager() {
    if (_dev2.default) {
        return _extends({}, initialState, window.__initialState__);
    } else {
        return initialState;
    }
};

exports.default = initialStateManager();