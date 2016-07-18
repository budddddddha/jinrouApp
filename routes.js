import React from 'react'
import { Route, IndexRoute } from 'react-router'

import User from './containers/User'
import Village from './containers/Village'

import App from './containers/App'
import UserOnly from './containers/auth/UserOnly'
import GuestOnly from './containers/auth/GuestOnly'
import Index from './containers/auth/Index'
import Login from './containers/auth/Login'
import SignUp from './containers/auth/SignUp'

export const getRoutes = store => {

  return (
    <Route path="/" component={App}>
      <Route component={UserOnly}>
        <IndexRoute component={Index} />
        <Route path="village/:villageId" component={Village} />
      </Route>
      <Route component={GuestOnly}>
        <Route path="login" component={Login} />
        <Route path="signup" component={SignUp} />
      </Route>
    </Route>
  )
}
