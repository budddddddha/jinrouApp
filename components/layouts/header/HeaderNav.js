import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class HeaderNav extends Component {

  render() {
    const { auth, handleLogout } = this.props;
    return (
      <nav id="header_nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/room/123">Room</Link></li>
          <li>{auth.isLoggedIn &&
            <button onClick={handleLogout}>Logout</button>
          }</li>
        </ul>
      </nav>
    )
  }
}

HeaderNav.propTypes = {
  auth: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default HeaderNav
