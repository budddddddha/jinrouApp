import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../../actions/index'

import VillageList from '../../components/village/VillageList'
import FriendList from '../../components/FriendList'
import SearchUserForm from '../../components/SearchUserForm'
import Loading from '../../components/layouts/Loading'
import SearchUserItem from '../../components/SearchUserItem'

class Index extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  socketSubmit() {
    e.preventDefault();
    socket.emit("client_to_server", "from_client");
  }

  renderSubmit() {
    return this.props.user.isFetching ? <Loading /> : <input type="submit" value="検索" />;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(actions.fetchSearchUser());

    const target = e.target;
    const id = target.id.value.trim()

    this.props.dispatch(actions.searchUser({
      id: target.id.value.trim()
    }));
  }

  handleFriendRequest(e) {
    console.log("handleSubmit!!!!!");
    e.preventDefault();
    console.log("this.props112",this.props);

    this.props.dispatch(actions.friendRequest({
      fromId: this.props.auth.user.id,
      toId: this.props.user.user.id
    }));
  }

  render() {
    const { auth, user, village, dispatch } = this.props
    console.log("this.props=",this.props);

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>Socket</p>
        <form onSubmit={this.socketSubmit}>
          <input type="submit" value="Socket" />
        </form>
        <p>UserName: {auth.user.name}</p>
        <p>VillageList</p>
        <VillageList
          villages={auth.gameData.villages}
        />
        <p>FriendList</p>
        <FriendList
          friendList={auth.gameData.friends}
        />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <p>ID</p>
              <p><input type="text" name="id" required /></p>
              {this.renderSubmit()}
            </li>
          </ul>
        </form>
        <SearchUserItem
          user={user.user}
          auth={auth}
          handleFriendRequest={this.handleFriendRequest.bind(this)}
        />
      </div>
    )
  }
}

Index.propTypes = {
  auth: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ auth, village, user }) {
  return { auth, village, user };
}

export default connect(select)(Index);
