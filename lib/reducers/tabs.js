/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activeTabItem = exports.tabItems = exports.SET_ACTIVE_TAB_BY_INDEX = exports.SET_ACTIVE_TAB = exports.SETUP_TABS_BY_MENU_INDEX = exports.SETUP_TABS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _data = require("../data");

var SETUP_TABS = exports.SETUP_TABS = "SETUP_TABS";
var SETUP_TABS_BY_MENU_INDEX = exports.SETUP_TABS_BY_MENU_INDEX = "SETUP_TABS_BY_MENU_INDEX";
var SET_ACTIVE_TAB = exports.SET_ACTIVE_TAB = "SET_ACTIVE_TAB_BY_ID";
var SET_ACTIVE_TAB_BY_INDEX = exports.SET_ACTIVE_TAB_BY_INDEX = "SET_ACTIVE_TAB_BY_INDEX";

var tabItems = function tabItems() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case SETUP_TABS:
            {
                return _.filter(_data.dataTabItems, ["mid", +action.payload]);
            }break;
        case SETUP_TABS_BY_MENU_INDEX:
            {
                var menuIndex = +action.payload;
                if (_data.dataMenuItems[menuIndex] && menuIndex < _data.dataMenuItems.length) {
                    return _.filter(_data.dataMenuItems, ["mid", _data.dataMenuItems[menuIndex].id]);
                } else return [];
            }break;
        default:
            return state;
    }
};

var activeTabItem = function activeTabItem() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case SET_ACTIVE_TAB:
            {
                var filtered = _.filter(_data.dataTabItems, ["mid", +action.payload.mid]);
                var index = _.findIndex(filtered, ["id", +action.payload.tid]);
                return _extends({}, filtered[index], {
                    internalIndex: index
                });
            }break;
        case SET_ACTIVE_TAB_BY_INDEX:
            {
                var _filtered = _.filter(_data.dataTabItems, function (item) {
                    return item.mid === +action.payload.mid;
                });
                if (action.payload.index >= 0 && action.payload.index < _filtered.length) {
                    return _extends({}, _filtered[action.payload.index], {
                        internalIndex: action.payload.index
                    });
                } else return false;
            }break;
        default:
            return state;
    }
};

exports.tabItems = tabItems;
exports.activeTabItem = activeTabItem;
exports.default = tabItems;