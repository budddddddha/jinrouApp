import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'


class MemberItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      member: this.props.member,
      key: this.props.key
    }
  }

  render() {
    return (
      <li key={this.state.key}>
        <ul>
          <li key={this.state.member.Id}>Name: {this.state.member.Id}</li>
          <li key={this.state.member.Role}>Role: {this.state.member.Role}</li>
        </ul>
      </li>
    )
  }
}

export default MemberItem
