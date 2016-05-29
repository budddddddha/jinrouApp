'use strict'
// component: 部品
// HTMLはここに書く

import React from 'react'
import CountCONT from '../containers/CountCONT'

const App = () => (
  React.createElement("div", null, 
    React.createElement(CountCONT, null)
  )
)

export default App
