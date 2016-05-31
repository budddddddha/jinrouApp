'use strict'

import { connect } from 'react-redux'
import { kaesu } from '../actions/app'
import Oumu from '../components/OumuCOMP'

const mapStateToProps = (state) => {
  return {
    output: state.oumu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OumuClick: (input) => {dispatch(kaesu(input))}
  }
}

const OumuCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Oumu)

export default OumuCont
