import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'

// components
import LogoutButton from '../components/LogIn/LogoutButton'

class Logout extends Component {
  render() {
    const { auth, auth_actions } = this.props
    return (
      <div>
        <h1>Logout</h1>
        <LogoutButton auth={auth} logOut={auth_actions.logOut} />
      </div>
    )
  }
}

Logout.propTypes = {
  auth: PropTypes.object.isRequired,
  auth_actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth_actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
