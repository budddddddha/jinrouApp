import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class LoginIdInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: this.props.id || ''
    }
  }

  handleSubmit(e) {
    const id = e.target.value.trim()
    if (e.which === 13) {
      this.props.onLogin(id)
      if (this.props.newLogin) {
        this.setState({ id: '' })
      }
    }
  }

  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  handleBlur(e) {
    if (!this.props.newLogin) {
      this.props.onLogin(e.target.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          'new-login': this.props.newLogin
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.id}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    )
  }
}

LoginIdInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  // editing: PropTypes.bool,
  newLogin: PropTypes.bool
}

export default LoginIdInput
