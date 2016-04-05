'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppRoutes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _store = require('./stores/store');

var _app = require('./components/app');

var _layouts = require('./layouts/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mr470 on 02.04.2016.
 */

var AppRoutes = _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store.store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _store.history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _layouts.BaseLayout },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _app.App }),
            _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/1' }),
            _react2.default.createElement(
                _reactRouter.Route,
                { path: '/:menuId', component: _app.App },
                _react2.default.createElement(_reactRouter.Route, { path: ':tabId', component: _app.App })
            ),
            _react2.default.createElement(_reactRouter.Route, { path: '*', component: _app.NoMatch })
        )
    )
);

exports.AppRoutes = AppRoutes;