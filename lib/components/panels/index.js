/**
 * Created by mr470 on 02.04.2016.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeftPanel = exports.RightPanel = undefined;

var _index = require("E:\\lab\\orodemo\\react\\node_modules\\redbox-react\\lib\\index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("E:\\lab\\orodemo\\react\\node_modules\\react-transform-catch-errors\\lib\\index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("E:\\lab\\orodemo\\react\\node_modules\\react-transform-hmr\\lib\\index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    LeftPanel: {
        displayName: "LeftPanel"
    },
    RightPanel: {
        displayName: "RightPanel"
    }
};

var _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "src/components/panels/index.js",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "src/components/panels/index.js",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2(_ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var LeftPanel = _wrapComponent("LeftPanel")(function (_Component) {
    _inherits(LeftPanel, _Component);

    function LeftPanel() {
        _classCallCheck(this, LeftPanel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftPanel).apply(this, arguments));
    }

    _createClass(LeftPanel, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react3.default.createElement(
                "div",
                { className: "column column-25" },
                children
            );
        }
    }]);

    return LeftPanel;
}(_react2.Component));

var RightPanel = _wrapComponent("RightPanel")(function (_Component2) {
    _inherits(RightPanel, _Component2);

    function RightPanel() {
        _classCallCheck(this, RightPanel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RightPanel).apply(this, arguments));
    }

    _createClass(RightPanel, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react3.default.createElement(
                "div",
                { className: "column column-75" },
                children
            );
        }
    }]);

    return RightPanel;
}(_react2.Component));

exports.RightPanel = RightPanel;
exports.LeftPanel = LeftPanel;