/**
 * Created by mr470 on 03.04.2016.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activeCollapsedItems = exports.collapseItems = exports.SETUP_COLLAPSED = exports.SETUP_COLLAPSE = exports.SETUP_COLLAPSE_BY_TAB_INDEX = exports.TOGGLE_COLLAPSE = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _data = require('../data');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TOGGLE_COLLAPSE = exports.TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';
var SETUP_COLLAPSE_BY_TAB_INDEX = exports.SETUP_COLLAPSE_BY_TAB_INDEX = 'SETUP_COLLAPSE_BY_TAB_INDEX';
var SETUP_COLLAPSE = exports.SETUP_COLLAPSE = "SETUP_COLLAPSE";
var SETUP_COLLAPSED = exports.SETUP_COLLAPSED = 'SETUP_COLLAPSED';

var activeCollapsedItems = function activeCollapsedItems() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case TOGGLE_COLLAPSE:
            {
                var index = _.indexOf(state, action.payload.toString());
                if (index < 0) {
                    //not find add set item to collapse
                    return [].concat(_toConsumableArray(state), [action.payload.toString()]);
                } else {
                    return _.filter(state, function (item) {
                        return item !== action.payload.toString();
                    });
                }
            }break;
        case SETUP_COLLAPSED:
            {
                return action.payload ? [].concat(_toConsumableArray(action.payload)) : state;
            }break;
        default:
            return state;
    }
};

var collapseItems = function collapseItems() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case SETUP_COLLAPSE:
            {
                return _.filter(_data.dataCollapseItems, function (item) {
                    return item.tid === +action.payload.tid && item.mid === +action.payload.mid;
                });
            }break;
        case SETUP_COLLAPSE_BY_TAB_INDEX:
            {
                var _ret = function () {
                    var filteredTabs = _.filter(_data.dataTabItems, ["mid", +action.payload.mid]);
                    var tab = filteredTabs[+action.payload.index];
                    return {
                        v: _.filter(_data.dataCollapseItems, function (item) {
                            return item.tid === tab.id && item.mid === +action.payload.mid;
                        })
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }break;
        default:
            return state;
    }
};

exports.collapseItems = collapseItems;
exports.activeCollapsedItems = activeCollapsedItems;
exports.default = collapseItems;