'use strict';
// reducer: 状態遷移を管理
// initialState: 初期状態

Object.defineProperty(exports, "__esModule", {
  value: true
});
var countter = function countter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      {
        return state + 1;
      }
    default:
      return state;
  }
};

exports.default = countter;