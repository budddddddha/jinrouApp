// 'use strict'
// // container:
// // mapStateToProps(state): 対象コンポーネントのプロパティを生成
// // mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// // dispatch(): storeにアクションを流し込む
// // connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
//   // これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

import { connect } from 'react-redux'
import { increment } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     PlusClick: () => {
//       dispatch(increment())
//     }
//   }
// }

const Count = connect(
  mapStateToProps
  // mapDispatchToProps
)(Counter)

export default Count
