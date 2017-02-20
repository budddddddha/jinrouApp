/**
 * <コンポーネント>
 * 村アイテム
 */

import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class VillageItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      villageId: this.props.villageId,
      key: this.props.key
    }
  }

  render() {
    return (
      <li key={this.state.key}>
        <Link to={`/village/${this.state.villageId}`}>{this.state.villageId}</Link>
      </li>
    )
  }
}

VillageItem.propTypes = {
  villageId: PropTypes.string,
}

export default VillageItem
