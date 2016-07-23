import React, { PropTypes, Component } from 'react'

import VillageItem from './VillageItem'

class VillageList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      villages: this.props.villages,
      onClick: this.props.onClick
    }
  }

  render() {
    return (
      <ul>
        {this.state.villages && this.state.villages.map((v,i) => {
          return (
            <VillageItem
              villageName={v}
              key={i}
              onClick={this.state.onClick}
            />
          )
        })}
      </ul>
    )
  }
}

VillageList.propTypes = {
  villages: PropTypes.array
}

export default VillageList
