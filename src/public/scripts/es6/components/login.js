'use strict'

import React from 'react'

export default class TopNav extends React.Component {
  render() {
    return React.createElement("div", null, 
      React.createElement("ul", null, 
        React.createElement("li", null, "HOME"), 
        React.createElement("li", null, "CONFIG")
      )
    )
  }
}
