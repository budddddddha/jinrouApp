'use strict'

import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return <form class="" action="/login" method="post">
      <input type="text" name="name" value="" placeholder="Please input your name." />
      <input type="password" name="password" value="" placeholder="Please input your password." />
      <input type="button" value="ログイン" />
    </form>
  }
}
