/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabsWrapper = undefined;

var _index = require('E:\\lab\\orodemo\\react\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\lab\\orodemo\\react\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\lab\\orodemo\\react\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactTabs = require('react-tabs');

var _tabs = require('./tabs.scss');

var _tabs2 = _interopRequireDefault(_tabs);

var _actions = require('../../actions');

var actionCreators = _interopRequireWildcard(_actions);

var _collapse = require('../collapse');

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TabsWrapper: {
        displayName: 'TabsWrapper'
    }
};

var _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/tabs/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/tabs/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2(_ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var TabsWrapper = _wrapComponent('TabsWrapper')((_temp = _class = function (_Component) {
    _inherits(TabsWrapper, _Component);

    function TabsWrapper() {
        _classCallCheck(this, TabsWrapper);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabsWrapper).apply(this, arguments));
    }

    _createClass(TabsWrapper, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var items = _props.items;
            var selectedIndex = _props.selectedIndex;
            var setActiveTab = _props.setActiveTab;

            var TabsHeaders = items.map(function (item) {
                return _react3.default.createElement(
                    _reactTabs.Tab,
                    { key: 'tab-' + item.id },
                    item.name
                );
            });

            var TabsContent = items.map(function (item) {
                return _react3.default.createElement(
                    _reactTabs.TabPanel,
                    { key: 'panel-' + item.id },
                    item.text
                );
            });
            //selectedIndex={selectedIndex || 0}
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    _reactTabs.Tabs,
                    { onSelect: setActiveTab, selectedIndex: selectedIndex || 0 },
                    _react3.default.createElement(
                        _reactTabs.TabList,
                        null,
                        TabsHeaders
                    ),
                    TabsContent
                )
            );
            // <Collapse items={collapse} collapseItemClick={this.collapseItemClick.bind(this)}/>
        }
    }]);

    return TabsWrapper;
}(_react2.Component), _class.PropTypes = {
    items: _react2.PropTypes.array.isRequired,
    selectedIndex: _react2.PropTypes.number.isRequired,
    setActiveTab: _react2.PropTypes.func.isRequired
}, _temp));

exports.TabsWrapper = TabsWrapper;
exports.default = TabsWrapper;