import React from 'react'
import { Route, IndexRoute } from 'react-router'

import User from './containers/User'
import Village from './containers/Village'
import MakeVillage from './containers/MakeVillage'
import Friend from './containers/client/Friend'

import App from './containers/App'
import UserOnly from './containers/client/UserOnly'
import GuestOnly from './containers/client/GuestOnly'
import Index from './containers/client/Index'
import Login from './containers/client/Login'
import SignUp from './containers/client/SignUp'

export const getRoutes = store => {

  return (
    <Route path="/" component={App}>
      <Route component={UserOnly}>
        <IndexRoute component={Index} />
        <Route path="village/:villageId" component={Village} />
        <Route path="makevillage" component={MakeVillage} />
        <Route path="friend/:friendId" component={Friend} />
      </Route>
      <Route component={GuestOnly}>
        <Route path="login" component={Login} />
        <Route path="signup" component={SignUp} />
      </Route>
    </Route>
  )
}
