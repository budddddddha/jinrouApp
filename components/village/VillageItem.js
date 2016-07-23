import React, { PropTypes, Component } from 'react'

class VillageItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      villageName: this.props.villageName,
      key: this.props.key,
      onClick: this.props.onClick
    }
  }

  render() {
    console.log("this.state.villageName");
    return (
      <li>
        <button key={this.state.key} onClick={() => {this.state.onClick(this.state.villageName)}}>
          {this.state.villageName}
        </button>
      </li>
    )
  }
}

VillageItem.propTypes = {
  villageName: PropTypes.string,
  key: PropTypes.string
}

export default VillageItem
