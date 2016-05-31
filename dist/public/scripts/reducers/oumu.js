'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var oumu = function oumu() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'KAESU':
      return action.input;
      break;
    default:
      return state;
  }
};

exports.default = oumu;