import React, { PropTypes, Component } from 'react'
import HeaderNav from './HeaderNav'

class Header extends Component {

  render() {
    const { auth, handleLogout } = this.props;
    return (
      <header>
        <HeaderNav
          auth={auth}
          handleLogout={handleLogout}
        />
      </header>
    )
  }
}

export default Header
