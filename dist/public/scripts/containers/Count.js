'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Counter = require('../components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     PlusClick: () => {
//       dispatch(increment())
//     }
//   }
// }

// 'use strict'
// // container:
// // mapStateToProps(state): 対象コンポーネントのプロパティを生成
// // mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// // dispatch(): storeにアクションを流し込む
// // connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
//   // これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

var Count = (0, _reactRedux.connect)(mapStateToProps
// mapDispatchToProps
)(_Counter2.default);

exports.default = Count;