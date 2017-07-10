/**
 * <コンテナ>
 * トップページ
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../actions/index'

import VillageList from '../components/village/VillageList'
import FriendList from '../components/FriendList'
import SearchUserForm from '../components/SearchUserForm'
import Loading from '../components/layouts/Loading'
import SearchUserItem from '../components/SearchUserItem'

class Top extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  renderSubmit() {
    return this.props.searchUser.isFetching ? <Loading /> : <input type="submit" value="検索" />;
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
      fromId: this.props.client.accountData.id,
      toId: this.props.searchUser.accountData.id
    }));
  }

  render() {
    const { client, searchUser, village, dispatch } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>UserName: {client.accountData.name}</p>
        <Link to={"/makevillage"}>makevillage</Link>
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
          searchUser={searchUser}
          client={client}
          handleFriendRequest={this.handleFriendRequest.bind(this)}
        />
      </div>
    )
  }
}

Top.propTypes = {
  client: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired,
  searchUser: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ client, village, searchUser }) {
  return { client, village, searchUser };
}

export default connect(select)(Top);
