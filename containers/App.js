/**
 * <コンテナ>
 * ベースコンテナ
 * 主に認証処理を記述
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import actions from '../actions/index'

// layouts
import Header from '../components/layouts/header/Header'
import Main from '../components/layouts/Main'
import Loading from '../components/layouts/Loading'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchLoginState())
  }
  componentWillUpdate(nextProps) {
    this.props.client.error = undefined;
  }

  handleLogout() {
    this.props.dispatch(actions.clickLogout())
  }

  render() {
    const { client, children } = this.props

    return client.isPrepared ? (
        <div>
          <Header
            client={client}
            handleLogout={this.handleLogout.bind(this)}
          />
          <Main
            children={children}
          />
        </div>) :
        <Loading />
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
}

function select({ client }) {
  return { client }
}

export default connect(select)(App)
