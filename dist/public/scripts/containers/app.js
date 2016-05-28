'use strict';
// container:
// mapStateToProps(state): 対象コンポーネントのプロパティを生成
// mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// dispatch(): storeにアクションを流し込む
// connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
// これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _app = require('../components/app');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('../actions/app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: function handleClick() {
      dispatch((0, _app3.increment)());
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_app2.default);