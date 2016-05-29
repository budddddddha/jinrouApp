'use strict';
// component: 部品
// HTMLはここに書く

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CountCONT = require('../containers/CountCONT');

var _CountCONT2 = _interopRequireDefault(_CountCONT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_CountCONT2.default, null));
};

exports.default = App;