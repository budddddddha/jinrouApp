import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'


class SearchUserItem extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     fromId: this.props.auth.user.id || '',
  //     toUser: this.props.user.user || ''
  //   }
  //   console.log("this.state=", this.state);
  // }
  //
  // handleSubmit(e) {
  //   console.log("handleSubmit!!!!!");
  //   e.preventDefault();
  //   console.log("this.props112",this.props);
  //
  //   this.props.dispatch(friendRequest({
  //     fromId: this.state.fromId,
  //     toId: this.state.toUser.id
  //   }));
  // }

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

SearchUserItem.propTypes = {
}

export default SearchUserItem
