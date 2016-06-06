import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import HeaderNav from './HeaderNav'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
          <HeaderNav />
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default Header
