'use strict'
// component: 部品
// HTMLはここに書く

import React from 'react'
import CountCONT from '../containers/CountCONT'
import OumuCont from '../containers/OumuCONT'

const App = () => (
  React.createElement("div", null, 
    React.createElement(CountCONT, null), 
    React.createElement(OumuCont, null)
  )
)

export default App
