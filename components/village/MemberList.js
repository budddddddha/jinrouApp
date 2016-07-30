import React, { PropTypes, Component } from 'react'

import MemberItem from './MemberItem'

class MemberList extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     villages: this.props.villages,
  //     onClick: this.props.onClick
  //   }
  // }

  render() {
    return (
      <ul>
        {this.props.members && this.props.members.map((v,i) => {
          return (
            <MemberItem
              member={v}
              key={i}
            />
          )
        })}
      </ul>
    )
  }
}

MemberList.propTypes = {
  members: PropTypes.array
}

export default MemberList
