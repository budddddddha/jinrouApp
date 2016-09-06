import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/index'

import MakeVillageForm from '../components/village/MakeVillageForm'

class MakeVillage extends Component {

  render() {
    return (
      <div>
        <h2>MakeVillage</h2>
        <MakeVillageForm
        />
      </div>
    )
  }
}

MakeVillage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired
};

function select({ client }) {
  return { client };
}

export default connect(select)(MakeVillage);
