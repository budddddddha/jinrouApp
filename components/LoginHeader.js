import React, { PropTypes, Component } from 'react'
import LoginIdInput from './LoginIdInput'

class LoginHeader extends Component {
  handleLogin(id) {
    if (id.length !== 0) {
      this.props.logIn(id)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>人狼</h1>
          <LoginIdInput newLogin
                         onLogin={this.handleLogin.bind(this)}
                         placeholder="Please input your ID?" />
      </header>
    )
  }
}

LoginHeader.propTypes = {
  logIn: PropTypes.func.isRequired,
}

export default LoginHeader
