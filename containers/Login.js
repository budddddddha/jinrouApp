import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/auth'

// components
  import LoginForm from '../components/Login/LoginForm'

class Login extends Component {
  render() {
    const { auth, auth_actions } = this.props
    return (
      <div>
        <h1>Login</h1>
        <LoginForm auth={auth} logIn={auth_actions.logIn} />
      </div>
    )
  }
}

Login.propTypes = {
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
)(Login)
