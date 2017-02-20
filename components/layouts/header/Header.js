/**
 * <コンポーネント>
 * ヘッダー
 */

import React, { PropTypes, Component } from 'react'
import HeaderNav from './HeaderNav'

class Header extends Component {

  render() {
    const { client, handleLogout } = this.props;
    return (
      <header>
        <HeaderNav
          client={client}
          handleLogout={handleLogout}
        />
      </header>
    )
  }
}

export default Header
