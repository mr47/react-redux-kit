"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activeMenuItem = exports.menuItems = exports.SET_ACTIVE_MENU_BY_INDEX = exports.SET_ACTIVE_MENU = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _data = require("../data");

var SET_ACTIVE_MENU = exports.SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
var SET_ACTIVE_MENU_BY_INDEX = exports.SET_ACTIVE_MENU_BY_INDEX = "SET_ACTIVE_MENU_BY_INDEX";

var menuItems = function menuItems() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _data.dataMenuItems : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        //can be implemented sorting filtering etc
        default:
            return state;
    }
};

var activeMenuItem = function activeMenuItem() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case SET_ACTIVE_MENU:
            {
                return _extends({}, _.find(_data.dataMenuItems, ["id", +action.payload]));
            }break;
        case SET_ACTIVE_MENU_BY_INDEX:
            {
                return _extends({}, _data.dataMenuItems[action.payload]);
            }break;
        default:
            return state;
    }
};

exports.menuItems = menuItems;
exports.activeMenuItem = activeMenuItem;
exports.default = menuItems;