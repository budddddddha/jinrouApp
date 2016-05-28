'use strict'
// container:
// mapStateToProps(state): 対象コンポーネントのプロパティを生成
// mapDispatchToProps(dispatch): dispatch関数を受け取ってプロパティに変換
// dispatch(): storeにアクションを流し込む
// connect()(COMPONENT): ReduxとReactのコンポーネントを繋ぐ
  // これによりreducerにreducer(mapStateToProps, mapDispatchToProps)が渡される

import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app'
import { increment } from '../actions/app'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(increment()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
