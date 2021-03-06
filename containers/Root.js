/**
 * <コンテナ>
 * ルーティングの設定
 * プロバイダー(react-redux)に store を渡す
 * reactルーターに履歴(history)とルーティング情報(getRoytes(store))を渡す
 */

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { getRoutes } from '../routes'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={getRoutes(store)} />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
