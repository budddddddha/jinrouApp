'use strict';
// // container:
// // mapStateToProps(state): 対象コンポーネントのプロパティを生成
// // mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// // dispatch(): storeにアクションを流し込む
// // connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
//   // これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _app = require('../actions/app');

var _CounterCOMP = require('../components/CounterCOMP');

var _CounterCOMP2 = _interopRequireDefault(_CounterCOMP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    countter: state.countter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    PlusClick: function PlusClick() {
      dispatch((0, _app.increment)());
    }
  };
};

var CountCONT = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CounterCOMP2.default);

exports.default = CountCONT;