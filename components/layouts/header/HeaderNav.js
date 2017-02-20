/**
 * <コンポーネント>
 * ヘッダーナビゲーション
 */

import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class HeaderNav extends Component {

  render() {
    const { client, handleLogout } = this.props;
    return (
      <nav id="header_nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/room/123">Room</Link></li>
          <li>{client.isLoggedIn &&
            <button onClick={handleLogout}>Logout</button>
          }</li>
        </ul>
      </nav>
    )
  }
}

HeaderNav.propTypes = {
  client: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default HeaderNav
