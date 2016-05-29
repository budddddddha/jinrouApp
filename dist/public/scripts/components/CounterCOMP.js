"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function Counter(_ref) {
  var countter = _ref.countter;
  var PlusClick = _ref.PlusClick;
  return _react2.default.createElement("div", null, _react2.default.createElement("span", null, countter), _react2.default.createElement("button", { onClick: function onClick() {
      return PlusClick();
    } }, "+"));
};

Counter.propTypes = {
  countter: _react.PropTypes.number.isRequired,
  PlusClick: _react.PropTypes.func.isRequired
};

exports.default = Counter;