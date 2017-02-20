/**
 * <コンポーネント>
 * 友達一覧
 */

import React, { PropTypes, Component } from 'react'
import FriendItem from './FriendItem'

class FriendList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      friendList: this.props.friendList
    }
  }

  render() {
    return (
      <ul>
        {this.state.friendList && this.state.friendList.map((v,i) => {
          return (
            <FriendItem
              friendId={v}
              key={i}
            />
          )
        })}
      </ul>
    )
  }
}

FriendList.propTypes = {
  friendList: PropTypes.array
}

export default FriendList
