import React, { PropTypes, Component } from 'react'

class MakeVillageForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      name: this.props.client.name || '',
      password: this.props.client.password || ''
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    const name = this.state.name.trim()
    const password = this.state.password.trim()
    if (name.length !== 0 && password.length !== 0) {
      this.props.logIn(name, password)
    }
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <ul>
          <li>
            <p>ID</p>
            <p><input type="text" name="id" required /></p>
          </li>
          <li>
            <p>Password</p>
            <p><input type="password" name="password" required /></p>
          </li>
        </ul>

        {client.error &&
          <p>{client.error}</p>
        }

        {this.renderSubmit()}
      </form>
    )
  }
}

MakeVillageForm.propTypes = {
  logIn: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
}

export default MakeVillageForm
