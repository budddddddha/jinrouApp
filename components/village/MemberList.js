/**
 * <コンポーネント>
 * メンバー一覧
 */

import React, { PropTypes, Component } from 'react'

import MemberItem from './MemberItem'

class MemberList extends Component {

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
