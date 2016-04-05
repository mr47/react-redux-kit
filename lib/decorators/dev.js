"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dev = function dev() {
    return process.env.NODE_ENV === "development" && window.devToolsExtension;
};

exports.default = dev();