import React, { PropTypes, Component } from 'react'
import { IndexRoute, Link, Router, Route, hashHistory } from 'react-router';
import classnames from 'classnames'


class HeaderNav extends Component {

  render() {
    return (
      <nav id="header_nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="login">LogIn</Link></li>
          <li><Link to="logined">LogIned</Link></li>
          <li><Link to="logout">LogOut</Link></li>
          <li><Link to="signup">SignUp</Link></li>
          <li><Link to="signout">SignOut</Link></li>
        </ul>
      </nav>
    )
  }
}


export default HeaderNav
