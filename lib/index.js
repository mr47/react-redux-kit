"use strict";

//Application Styles

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require("router");

Object.keys(_router).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _router[key];
    }
  });
});

require("./styles.scss");