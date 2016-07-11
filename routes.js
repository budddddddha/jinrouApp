import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Logout from './containers/Logout'
import User from './containers/User'
import Room from './containers/Room'
import Village from './containers/Village'

import App from './containers/App'
import UserOnly from './containers/auth/UserOnly'
import GuestOnly from './containers/auth/GuestOnly'
import Index from './containers/auth/Index'
import Login from './containers/auth/Login'

export const getRoutes = store => {

  return (
    <Route path="/" component={App}>
      <Route component={UserOnly}>
        <IndexRoute component={Index} />
        <Route path="village/:villageId" component={Village} />
      </Route>
      <Route component={GuestOnly}>
        <Route path="login" component={Login} />
      </Route>
    </Route>
  )
}
