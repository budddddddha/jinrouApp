import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../../actions/index'

import FriendList from '../../components/FriendList'

class Friend extends Component {

  componentDidMount() {
    console.log("componentDidMount");
    console.log("this.props=",this.props);
    this.props.dispatch(actions.fetchFriend({
      friendId: this.props.params.friendId
    }))
  }

  render() {
    const { auth, dispatch } = this.props

    return (
      <div id="Friend">
        <h2>Friend</h2>
        <p>{this.props.friend.id}</p>
      </div>
    )
  }
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ friend }) {
  return { friend };
}

export default connect(select)(Friend);
