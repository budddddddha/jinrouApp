import React, { PropTypes, Component } from 'react'
import HeaderNav from './HeaderNav'

class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      auth: this.props.auth
    }
  }

  render() {
    console.log("header")
    return (
      <header>
        <HeaderNav auth={this.state.auth} />
      </header>
    )
  }
}

export default Header
