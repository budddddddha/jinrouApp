import React, { Component, PropTypes } from 'react'

// material ui theme
import { AuthGlobals } from "redux-auth"

class ReduxAuth extends Component {
  render() {
    return (
      <div>
        <AuthGlobals />
        {this.props.children}
      </div>
    )
  }
}

export default ReduxAuth
