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

export default (
  <Route path="/" component={App}>
    <Route path="login" component={Login} />
    <Route path="logined" component={Logined} onEnter="requireAuth" />
  </Route>
)
