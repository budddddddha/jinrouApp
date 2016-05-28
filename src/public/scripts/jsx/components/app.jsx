'use strict'
// component: 部品
// HTMLはここに書く

import React from 'react'
import TopNav from './top_nav'
import LoginForm from './login_form'

export default class App extends React.Component {
  render() {
    return <div>
      <TopNav />
      <LoginForm />
      <span>{this.props.fuga}</span>
      <button onClick={ () => this.props.handleClick() }>増加</button>
    </div>
  }
}
