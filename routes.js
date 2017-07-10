/**
 * ルーティング情報
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import User from './containers/User'

import Village from './containers/village/Village'
import MakeVillage from './containers/village/MakeVillage'

import App from './containers/App'
import UserOnly from './containers/auth/UserOnly'
import GuestOnly from './containers/auth/GuestOnly'
import Top from './containers/Top'
import Login from './containers/auth/Login'
import SignUp from './containers/auth/SignUp'

export const getRoutes = store => {

  return (
    <Route path="/" component={App}>
      <Route component={UserOnly}>
        <IndexRoute component={Top} />
        <Route path="village/:villageId" component={Village} />
        <Route path="makevillage" component={MakeVillage} />
      </Route>
      <Route component={GuestOnly}>
        <Route path="login" component={Login} />
        <Route path="signup" component={SignUp} />
      </Route>
    </Route>
  )
}
