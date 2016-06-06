import React, { PropTypes, Component } from 'react'

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context)
    console.log("props=",props)
    this.state = {
      name: this.props.auth.name || '',
      password: this.props.auth.password || ''
    }
  }

  handleNameChange(e) {
    this.setState(
      {
        name: e.target.value
      }
    )
  }

  handlePasswordChange(e) {
    this.setState(
      {
        password: e.target.value
      }
    )
  }


  handleSubmit(e) {
    const name = this.state.name.trim()
    const password = this.state.password.trim()
    if (name.length !== 0 && password.length !== 0) {
      console.log("name=",name)
      console.log("password=",password)
      this.props.logIn(name, password)
      // this.setState(
      //   {
      //     name: '',
      //     password: ''
      //   }
      // )
    }
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit.bind()}>
        <input type="text"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
        />
      <input type="text"
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <input type="button"
          value="ログイン"
          onClick={this.handleSubmit.bind(this)}
        />
      </form>
    )
  }
}

LoginForm.propTypes = {
  logIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

export default LoginForm
