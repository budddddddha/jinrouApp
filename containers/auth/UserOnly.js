import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';

class UserOnly extends Component {
  constructor() {
    super()
    const user = io('/socket/user');
    user.on('news', function(data) {
      console.log("news data=", data);
      user.emit('my other event', { my: data });
    })
  }

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.guestWillTransfer(nextProps, this.context.router);
  }

  guestWillTransfer(props, router) {
    if (!props.auth.isLoggedIn) {
      router.replace('/login');
    }
  }

  render() {
    const { children } = this.props

    return (
      <div id="user_only">
        <h2>user_only</h2>
        {this.props.children}
      </div>
    )
  }
}

UserOnly.propTypes = {
  children: PropTypes.object.isRequired,
};

function select({ auth }) {
  return { auth };
}

export default connect(select)(UserOnly);
