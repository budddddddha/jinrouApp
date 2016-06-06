import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginForm from '../components/Login/LoginForm'
import * as TodoActions from '../actions'

class Login extends Component {
  render() {
    const { auth, actions } = this.props
    return (
      <div>
        <h1>Login</h1>
        <LoginForm auth={auth} logIn={actions.logIn} />
      </div>
    )
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
