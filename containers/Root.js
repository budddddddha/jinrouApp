import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

// import routes from '../routes'
import { getRoutes } from '../routes'
// import routes from '../redux_auth_routes'


export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={getRoutes(store)} />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
