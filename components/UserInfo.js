/**
 * <コンポーネント>
 * ユーザ情報
 */

import React, { PropTypes, Component } from 'react'

class UserInfo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: this.props.user.id
      name: this.props.user.name || '',
    }
  }

  handleSubmit() {
    this.props.friendRequest()
  }

  render() {
    return (
      <p>id: {this.state.id}</p>
      <p>name: {this.state.name}</p>
      <form onSubmit={this.handleSubmit}>
        <input type="button"
          value="友達申請"
          onClick={this.handleSubmit}
        />
      </form>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserInfo
