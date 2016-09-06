import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { Link } from 'react-router'

class User extends Component {
  render() {
    const { actions, id, name, password, room } = this.props
    return (
      <div>
        <h2>User</h2>
        <p>ユーザ情報</p>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>password: {password}</p>

      </div>
    )
  }
}

User.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    id: state.auth.id,
    name: state.auth.name,
    password: state.auth.password
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
)(User)
