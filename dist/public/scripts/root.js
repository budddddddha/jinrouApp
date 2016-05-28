'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _app = require('./containers/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: _store }, _react2.default.createElement(_app2.default, null)), document.getElementById('root'));