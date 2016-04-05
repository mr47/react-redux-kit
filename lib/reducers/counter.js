"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var INCREMENT = exports.INCREMENT = 'INCREMENT';
var DECREMENT = exports.DECREMENT = 'DECREMENT';

var counter = function counter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case INCREMENT:
            {
                return state + 1;
            }break;
        case DECREMENT:
            {
                return state - 1;
            }break;
        default:
            return state;
    }
};

exports.counter = counter;
exports.default = counter;