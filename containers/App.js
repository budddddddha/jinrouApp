import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'

// containers
import Login from './Login'

// components
  // layouts
  import Header from '../components/layouts/header/Header'


class App extends Component {
  render() {
    const { auth, children } = this.props
    return (
      <div>
        <Header auth={auth} />
        <div id="main">{children}</div>
      </div>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(
  mapStateToProps,
  undefined
)(App)
