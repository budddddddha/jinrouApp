'use strict'


import React, { PropTypes } from 'react'


const Oumu = ({output, OumuClick}) => (
  <div>
    <input type="text" name="oumu" value={output} onChange={event => OumuClick(event.target.value)} />
    <span>Re: {output}</span>
  </div>
)

Oumu.propTypes = {
  oumu: PropTypes.string,
  OumuClick : PropTypes.func
}

export default Oumu
