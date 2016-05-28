'use strict'
// component: 部品
// HTMLはここに書く

import React from 'react'
import TopNav from './top_nav'
import LoginForm from './login_form'

export default class App extends React.Component {
  render() {
    return React.createElement("div", null, 
      React.createElement(TopNav, null), 
      React.createElement(LoginForm, null), 
      React.createElement("span", null, this.props.fuga), 
      React.createElement("button", {onClick:  () => this.props.handleClick()}, "増加")
    )
  }
}
