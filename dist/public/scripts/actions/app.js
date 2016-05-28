'use strict';
// action: アクションを選択する
// reducerのaction.typeに[type]である'INCREMENT'を流し込む

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.default = {
  increment: function increment() {
    return { type: 'INCREMENT' };
  }
};
function increment() {
  return {
    type: 'INCREMENT'
  };
}