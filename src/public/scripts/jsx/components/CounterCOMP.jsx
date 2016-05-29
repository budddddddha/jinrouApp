import React, { PropTypes } from 'react'

const Counter = ({countter, PlusClick}) => (
  <div>
    <span>{countter}</span>
    <button onClick={() => PlusClick()}>+</button>
  </div>
)

Counter.propTypes = {
  countter: PropTypes.number.isRequired,
  PlusClick: PropTypes.func.isRequired
}

export default Counter
