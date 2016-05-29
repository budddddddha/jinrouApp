'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _app = require('./reducers/app');

var _app2 = _interopRequireDefault(_app);

var _AppCOMP = require('./components/AppCOMP');

var _AppCOMP2 = _interopRequireDefault(_AppCOMP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_app2.default); // Entry Point

console.log(store.getState());

(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_AppCOMP2.default, null)), document.getElementById('root'));