// Entry Point

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import jinrouApp from './reducers/app'

let store = createStore(jinrouApp)
console.log(store.getState())

import App from './components/AppCOMP'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
