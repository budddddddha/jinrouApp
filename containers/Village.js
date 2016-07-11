import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'

class Village extends Component {
  componentDidMount() {
    this.setState({
      // villageId: this.props.params.villageId
    })
  }

  render() {
    const villageId = this.props.params.villageId
    return (
      <div>
        <h2>Village</h2>
        <p>部屋情報</p>
        <p>villageId: {villageId}</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Village)
