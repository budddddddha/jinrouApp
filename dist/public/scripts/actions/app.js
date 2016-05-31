'use strict';
// action: アクションを選択する
// reducerのaction.typeに[type]である'INCREMENT'を流し込む

Object.defineProperty(exports, "__esModule", {
  value: true
});
var increment = exports.increment = function increment() {
  return {
    type: 'INCREMENT'
  };
};

var kaesu = exports.kaesu = function kaesu(input) {
  return {
    type: 'KAESU',
    input: input
  };
};