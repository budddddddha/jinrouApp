import React, { PropTypes, Component } from 'react'

import VillageItem from './VillageItem'

class VillageList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      villages: this.props.villages
    }
  }

  render() {
    return (
      <ul>
        {this.state.villages && this.state.villages.map((v,i) => {
          return (
            <VillageItem
              villageId={v}
              key={i}
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
