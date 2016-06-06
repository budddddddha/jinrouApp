import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import LoginForm from '../components/Login/LoginForm'
import * as TodoActions from '../actions'

class App extends Component {
  render() {
    const { auth, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <Main />
        <LoginForm auth={auth} logIn={actions.logIn} />
      </div>
    )
  }
}

App.propTypes = {
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
)(App)
