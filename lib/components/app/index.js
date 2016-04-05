/**
 * Created by mr470 on 02.04.2016.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

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

var _noMatch = require('./noMatch');

Object.keys(_noMatch).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _noMatch[key];
        }
    });
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _panels = require('../panels/');

var _collapse = require('../collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _tabs = require('../tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _actions = require('../../actions');

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    BaseApp: {
        displayName: 'BaseApp'
    }
};

var _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/app/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/app/index.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2(_ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var BaseApp = _wrapComponent('BaseApp')((_temp = _class = function (_Component) {
    _inherits(BaseApp, _Component);

    function BaseApp() {
        _classCallCheck(this, BaseApp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseApp).apply(this, arguments));
    }

    _createClass(BaseApp, [{
        key: 'handleSetActiveMenu',
        value: function handleSetActiveMenu(mid) {
            var _props$actions = this.props.actions;
            var setActiveMenu = _props$actions.setActiveMenu;
            var setupTabs = _props$actions.setupTabs;
            var setActiveTabByIndex = _props$actions.setActiveTabByIndex;
            var setupCollapseByTabIndex = _props$actions.setupCollapseByTabIndex;
            var setupCollapsed = _props$actions.setupCollapsed;

            setActiveMenu(mid);
            setupTabs(mid);
            setActiveTabByIndex({
                index: 0,
                mid: mid
            });
            setupCollapseByTabIndex({
                index: 0,
                mid: mid
            });
            setupCollapsed([]);
        }
    }, {
        key: 'handleSetActiveTab',
        value: function handleSetActiveTab(index) {
            var activeMenuItem = this.props.activeMenuItem;
            var _props$actions2 = this.props.actions;
            var setActiveTabByIndex = _props$actions2.setActiveTabByIndex;
            var setupCollapseByTabIndex = _props$actions2.setupCollapseByTabIndex;
            var setupCollapsed = _props$actions2.setupCollapsed;

            setActiveTabByIndex({
                index: index,
                mid: activeMenuItem.id
            });
            setupCollapseByTabIndex({
                index: index,
                mid: activeMenuItem.id
            });
            setupCollapsed([]);
        }
    }, {
        key: 'handleToggleCollapse',
        value: function handleToggleCollapse(cid) {
            var toggleCollapse = this.props.actions.toggleCollapse;

            toggleCollapse(cid);
        }
        // "one state sync to rule them all."
        // sync state

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                var _props$actions3 = this.props.actions;
                var setActiveMenu = _props$actions3.setActiveMenu;
                var setupTabs = _props$actions3.setupTabs;
                var setActiveTab = _props$actions3.setActiveTab;
                var setActiveTabByIndex = _props$actions3.setActiveTabByIndex;
                var setupCollapse = _props$actions3.setupCollapse;
                var setupCollapsed = _props$actions3.setupCollapsed;
                var setupCollapseByTabIndex = _props$actions3.setupCollapseByTabIndex;

                if (nextProps.params.menuId) {
                    setActiveMenu(nextProps.params.menuId);
                    setupTabs(nextProps.params.menuId);
                    if (nextProps.params.tabId) {
                        setActiveTab({
                            tid: nextProps.params.tabId,
                            mid: nextProps.params.menuId
                        });
                        setupCollapse({
                            tid: nextProps.params.tabId,
                            mid: nextProps.params.menuId
                        });
                    } else {
                        setupCollapseByTabIndex({
                            index: 0,
                            mid: nextProps.params.menuId
                        });
                        setActiveTabByIndex({
                            index: 0,
                            mid: nextProps.params.menuId
                        });
                        setupCollapsed([]);
                    }
                    if (!_.isEqual(nextProps.activeCollapsedItems, this.props.activeCollapsedItems)) {
                        if (nextProps.location.query.collapse.length > 0) {
                            setupCollapsed(nextProps.location.query.collapse.split("-"));
                        }
                    }
                }
            }
            if (!_.isEqual(nextProps.activeTabItem, this.props.activeTabItem) || !_.isEqual(nextProps.activeMenuItem, this.props.activeMenuItem) || !_.isEqual(nextProps.activeCollapsedItems, this.props.activeCollapsedItems)) {
                var route = {
                    pathname: '/' + nextProps.activeMenuItem.id + '/' + nextProps.activeTabItem.id
                };
                if (nextProps.activeCollapsedItems && nextProps.activeCollapsedItems.length > 0) {
                    route.query = {
                        collapse: nextProps.activeCollapsedItems.join("-")
                    };
                }
                this.context.router.push(route);
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props;
            var params = _props.params;
            var location = _props.location;
            var _props$actions4 = this.props.actions;
            var setActiveMenu = _props$actions4.setActiveMenu;
            var setupTabs = _props$actions4.setupTabs;
            var setActiveTab = _props$actions4.setActiveTab;
            var setActiveTabByIndex = _props$actions4.setActiveTabByIndex;
            var setupCollapse = _props$actions4.setupCollapse;
            var setupCollapsed = _props$actions4.setupCollapsed;
            var setupCollapseByTabIndex = _props$actions4.setupCollapseByTabIndex;

            if (params.menuId) {
                setActiveMenu(params.menuId);
                setupTabs(params.menuId);
                if (params.tabId) {
                    setupCollapse({
                        tid: params.tabId,
                        mid: params.menuId
                    });
                    setActiveTab({
                        tid: params.tabId,
                        mid: params.menuId
                    });
                } else {
                    setupCollapseByTabIndex({
                        index: 0,
                        mid: params.menuId
                    });
                    setActiveTabByIndex({
                        index: 0,
                        mid: params.menuId
                    });
                }
                if (location.query.collapse) {
                    setupCollapsed(location.query.collapse.split("-"));
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var menuItems = _props2.menuItems;
            var tabItems = _props2.tabItems;
            var collapseItems = _props2.collapseItems;
            var activeTabItem = _props2.activeTabItem;
            var activeCollapsedItems = _props2.activeCollapsedItems;

            return _react3.default.createElement(
                'div',
                { className: 'row' },
                _react3.default.createElement(
                    _panels.LeftPanel,
                    null,
                    _react3.default.createElement(_menu2.default, { items: menuItems, setActiveMenu: this.handleSetActiveMenu.bind(this) })
                ),
                _react3.default.createElement(
                    _panels.RightPanel,
                    null,
                    _react3.default.createElement(_tabs2.default, { items: tabItems, selectedIndex: +activeTabItem.internalIndex, setActiveTab: this.handleSetActiveTab.bind(this) }),
                    _react3.default.createElement(_collapse2.default, { items: collapseItems, collapsedItems: activeCollapsedItems, collapseItemClick: this.handleToggleCollapse.bind(this) })
                )
            );
        }
    }]);

    return BaseApp;
}(_react2.Component), _class.contextTypes = {
    router: _react2.PropTypes.any.isRequired
}, _temp));

var mapStateToProps = function mapStateToProps(state) {
    return {
        menuItems: state.menuItems,
        tabItems: state.tabItems,
        activeTabItem: state.activeTabItem,
        activeMenuItem: state.activeMenuItem,
        collapseItems: state.collapseItems,
        activeCollapsedItems: state.activeCollapsedItems
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(actionCreators, dispatch) };
};

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BaseApp);

exports.App = App;
exports.default = App;