'use strict';
// component: 部品
// HTMLはここに書く

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Counter = require('./Counter');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_Counter2.default, null));
};

exports.default = App;