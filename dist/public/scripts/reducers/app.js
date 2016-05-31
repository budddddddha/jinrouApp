'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _count = require('./count');

var _count2 = _interopRequireDefault(_count);

var _oumu = require('./oumu');

var _oumu2 = _interopRequireDefault(_oumu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jinrouApp = (0, _redux.combineReducers)({
  countter: _count2.default,
  oumu: _oumu2.default
});

exports.default = jinrouApp;