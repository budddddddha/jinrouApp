import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'


class MasterOption extends Component {
  constructor(props, context) {
    super(props, context)
    console.log("MasterOption");
    console.log("this.props=", this.props);
    this.state = {
      value: this.props.value,
      key: this.props.key
    }
  }

  render() {
    return (
      <option value={this.props.value} key={this.props.key}>{this.props.value}</option>
    )
  }
}

export default MasterOption
