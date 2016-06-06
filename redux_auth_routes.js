import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Login from './containers/Login'
import Logined from './containers/Logined'
import ReduxAuth from './containers/ReduxAuth'
import auth from './auth'

function requireAuth(nextState, transition) {
  if (!auth.loggedIn())
    transition.to('/login', null, { nextPathname: nextState.location.pathname });
}

// example routes. the nested routes here will replace "this.props.children"
// in the example above
export default (
  <Route path="/" component={ReduxAuth}>
    <IndexRoute component={Main} />
    <Route path="alt" component={Alt} />
    <Route path="login" component={SignIn} />
    <Route path="account" component={Account} onEnter={requireAuth} />
  </Route>
)
