"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseLayout = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseLayout = function BaseLayout(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
            'h1',
            null,
            _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'React + Redux Demo'
            )
        ),
        children
    );
};

exports.BaseLayout = BaseLayout;