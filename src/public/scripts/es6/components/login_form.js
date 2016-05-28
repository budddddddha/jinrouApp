'use strict'

import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return React.createElement("form", {class: "", action: "/login", method: "post"}, 
      React.createElement("input", {type: "text", name: "name", value: "", placeholder: "Please input your name."}), 
      React.createElement("input", {type: "password", name: "password", value: "", placeholder: "Please input your password."}), 
      React.createElement("input", {type: "button", value: "ログイン"})
    )
  }
}
