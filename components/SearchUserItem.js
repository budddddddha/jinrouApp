import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class SearchUserItem extends Component {

  render() {
    const { handleFriendRequest } = this.props
    return (
      <div>
        <p>SearchUserItem</p>
        <p>Id: {this.props.user.id}</p>
        <p>Name: {this.props.user.name}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="button"
            value="友達申請"
            onClick={handleFriendRequest}
          />
        </form>
      </div>
    )
  }
}

export default SearchUserItem
