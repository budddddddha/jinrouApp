'use strict'
// component: 部品
// HTMLはここに書く

import React from 'react'
import Counter from './Counter'

const App = () => (
  React.createElement("div", null, 
    React.createElement(Counter, null)
  )
)

export default App