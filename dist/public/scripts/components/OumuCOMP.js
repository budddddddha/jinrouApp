'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Oumu = function Oumu(_ref) {
  var output = _ref.output;
  var OumuClick = _ref.OumuClick;
  return _react2.default.createElement("div", null, _react2.default.createElement("input", { type: "text", name: "oumu", value: output, onChange: function onChange(event) {
      return OumuClick(event.target.value);
    } }), _react2.default.createElement("span", null, "Re: ", output));
};

Oumu.propTypes = {
  oumu: _react.PropTypes.string,
  OumuClick: _react.PropTypes.func
};

exports.default = Oumu;