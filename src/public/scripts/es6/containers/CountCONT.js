'use strict'
// // container:
// // mapStateToProps(state): 対象コンポーネントのプロパティを生成
// // mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// // dispatch(): storeにアクションを流し込む
// // connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
//   // これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

import { connect } from 'react-redux'
import { increment } from '../actions/app'
import Counter from '../components/CounterCOMP'

const mapStateToProps = (state) => {
  return {
    countter: state.countter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    PlusClick: () => {dispatch(increment())}
  }
}

const CountCONT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CountCONT
