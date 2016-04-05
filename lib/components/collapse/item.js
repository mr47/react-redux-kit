'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollapseItem = undefined;

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

var _collapse = require('./collapse.scss');

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CollapseItem: {
        displayName: 'CollapseItem'
    }
};

var _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/components/collapse/item.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/components/collapse/item.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _ELabOrodemoReactNode_modulesReactTransformHmrLibIndexJs2(_ELabOrodemoReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by mr470 on 03.04.2016.
   */

var CollapseItem = _wrapComponent('CollapseItem')((_temp = _class = function (_Component) {
    _inherits(CollapseItem, _Component);

    function CollapseItem() {
        _classCallCheck(this, CollapseItem);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CollapseItem).apply(this, arguments));
    }

    _createClass(CollapseItem, [{
        key: 'onItemClick',
        value: function onItemClick(e) {
            e.preventDefault();
            this.props.collapseItemClick(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var id = _props.id;
            var name = _props.name;
            var text = _props.text;
            var collapsed = _props.collapsed;

            return _react3.default.createElement(
                'div',
                { className: collapsed ? _collapse2.default.itemCollapsed : _collapse2.default.item },
                _react3.default.createElement(
                    'div',
                    { className: _collapse2.default.header },
                    _react3.default.createElement(
                        'a',
                        { href: '#', onClick: this.onItemClick.bind(this) },
                        name
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: _collapse2.default.body },
                    text
                )
            );
        }
    }]);

    return CollapseItem;
}(_react2.Component), _class.PropTypes = {
    name: _react2.PropTypes.string.isRequired,
    id: _react2.PropTypes.number.isRequired,
    text: _react2.PropTypes.string.isRequired,
    collapsed: _react2.PropTypes.bool,
    collapseItemClick: _react2.PropTypes.func.isRequired
}, _temp));

exports.CollapseItem = CollapseItem;