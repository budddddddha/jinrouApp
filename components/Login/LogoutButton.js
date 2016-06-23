import React, { PropTypes, Component } from 'react'

class LogoutButton extends Component {
  constructor(props, context) {
    super(props, context)
    console.log("props=",props)
    this.state = {
      name: this.props.auth.name || '',
      password: this.props.auth.password || ''
    }
  }

  handleSubmit(e) {
    const name = this.state.name.trim()
    const password = this.state.password.trim()
    if (name.length !== 0 && password.length !== 0) {
      console.log("name=",name)
      console.log("password=",password)
      this.props.logOut(name, password)
    }
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit.bind()}>
        <input type="button"
          value="ログアウト"
          onClick={this.handleSubmit.bind(this)}
        />
      </form>
    )
  }
}

LogoutButton.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

export default LogoutButton
