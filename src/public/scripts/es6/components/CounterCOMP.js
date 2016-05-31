'use strict'

import React, { PropTypes } from 'react'

const Counter = ({countter, PlusClick}) => (
  React.createElement("div", null, 
    React.createElement("span", null, countter), 
    React.createElement("button", {onClick: () => PlusClick()}, "+")
  )
)

Counter.propTypes = {
  countter: PropTypes.number.isRequired,
  PlusClick: PropTypes.func.isRequired
}

export default Counter
