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

  handleLogout() {
    this.props.dispatch(actions.clickLogout())
  }

  render() {
    const { auth, children } = this.props

    return auth.isPrepared ? (
        <div>
          <Header
            auth={auth}
            handleLogout={this.handleLogout.bind(this)}
          />
          <Main
            children={children}
            auth={auth}
          />
        </div>) :
        <Loading />
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired
}

function select({ auth }) {
  return { auth }
}

export default connect(select)(App)
