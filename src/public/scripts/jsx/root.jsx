import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/app'

const _store = configureStore()

render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
