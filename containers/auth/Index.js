import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../../actions/index'

import VillageList from '../../components/village/VillageList'
import FriendList from '../../components/FriendList'

class Index extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  render() {
    const { auth, village, dispatch } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>{auth.user.name}</p>
        <VillageList
          villages={auth.gameData.villages}
          dispatch={dispatch}
        />
        <FriendList
          friendList={auth.gameData.friends}
        />
      </div>
    )
  }
}

Index.propTypes = {
  auth: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ auth, village }) {
  return { auth, village };
}

export default connect(select)(Index);
