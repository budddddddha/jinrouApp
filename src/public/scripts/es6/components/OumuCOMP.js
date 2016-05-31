'use strict'


import React, { PropTypes } from 'react'


const Oumu = ({output, OumuClick}) => (
  React.createElement("div", null, 
    React.createElement("input", {type: "text", name: "oumu", value: output, onChange: event => OumuClick(event.target.value)}), 
    React.createElement("span", null, "Re: ", output)
  )
)

Oumu.propTypes = {
  oumu: PropTypes.string,
  OumuClick : PropTypes.func
}

export default Oumu
