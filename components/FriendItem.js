import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'


class FriendItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      friendId: this.props.friendId,
      key: this.props.key
    }
  }

  render() {
    return (
      <li key={this.state.key}>
        <p>{this.state.friendId}</p>
      </li>
    )
  }
}

FriendItem.propTypes = {
  friendId: PropTypes.string,
}

export default FriendItem
