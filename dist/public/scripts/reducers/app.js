'use strict';
// reducer: 状態遷移を管理
// initialState: 初期状態

// 初期ステート設定

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
var initialState = {
  fuga: 0
};

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      {
        return { fuga: state.fuga + 1 };
      }
    default:
      return state;
  }
}