import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class HeaderNav extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      auth: this.props.auth
    }
  }

  render() {
    const { auth, handleLogout } = this.props;
    return (
      <nav id="header_nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/room/123">Room</Link></li>
          {this.state.auth.login ? (
            <li><Link to="/logout">LogOut</Link></li>
          ) : (
            <li><Link to="/login">LogIn</Link></li>
          )}
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/signout">SignOut</Link></li>
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
}

export default HeaderNav
