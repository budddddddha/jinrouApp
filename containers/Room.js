import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'

class Room extends Component {
  render() {
    const { actions, params } = this.props
    const roomId = params.roomId
    return (
      <div>
        <h2>Room</h2>
        <p>部屋情報</p>
        <p>roomId: {roomId}</p>
      </div>
    )
  }
}

Room.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)
