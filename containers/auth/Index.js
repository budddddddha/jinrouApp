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
    e.preventDefault();
    this.props.dispatch(actions.friendRequest({
      fromId: this.props.client.user.id,
      toId: this.props.user.user.id
    }));
  }

  render() {
    const { client, user, village, dispatch } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>UserName: {client.user.name}</p>
        <p>VillageList</p>
        <VillageList
          villages={client.gameData.villages}
        />
        <p>FriendList</p>
        <FriendList
          friendList={client.gameData.friends}
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
          client={client}
          handleFriendRequest={this.handleFriendRequest.bind(this)}
        />
      </div>
    )
  }
}

Index.propTypes = {
  client: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ client, village, user }) {
  return { client, village, user };
}

export default connect(select)(Index);
