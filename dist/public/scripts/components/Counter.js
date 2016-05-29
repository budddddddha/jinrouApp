"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Counter = ({num, PlusClick}) => (
var Counter = function Counter(num) {
  return _react2.default.createElement("div", null, _react2.default.createElement("span", null, undefined));
};

Counter.propTypes = {
  num: _react.PropTypes.number.isRequired
};

// PlusClick: PropTypes.func.isRequired
exports.default = Counter;