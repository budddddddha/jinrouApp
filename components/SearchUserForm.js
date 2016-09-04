import React, { PropTypes, Component } from 'react'

class SearchUserForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: ''
    }
  }

  handleChange(e) {
    this.setState(
      {
        id: e.target.value
      }
    )
  }

  handleSubmit(e) {
    const id = this.state.id.trim()
    if (id.length !== 0) {
      this.props.handleSearchUser(id)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind()}>
        <input type="text"
          value={this.state.id}
          onChange={this.handleChange.bind(this)}
        />
        <input type="button"
          value="サーチ"
          onClick={this.handleSubmit.bind(this)}
        />
      </form>
    )
  }
}

export default SearchUserForm
