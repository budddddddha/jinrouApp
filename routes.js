import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Login from './containers/Login'
import Logout from './containers/Logout'
import User from './containers/User'
import Room from './containers/Room'

export const getRoutes = (store) => {
  const requireAuth = (nextState, replaceState) => {
    const state = store.getState()
    if (!state.auth.login) {
      replaceState({ pathname: '/login'})
    }
  }
  const requireRoomMember = (nextState, replaceState) => {
    const state = store.getState()
    console.log("state.auth.id=",state.auth.id)
    console.log("state.room.member=",state.room.member)
    console.log(state.room.member.indexOf(state.auth.id))
    if (state.room.member.indexOf(state.auth.id) == -1) {
      replaceState({ pathname: '/user'})
    }
  }

  return (
    <Route path="/" component={App}>
      <Route path="user" component={User} onEnter={requireAuth} />
      <Route path="room/:roomId" component={Room} onEnter={requireAuth} onEnter={requireRoomMember} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="auth/" component={Auth}>
        <Route component={UserOnly}>
          <IndexRoute component={Index} />
        </Route>
        <Route component={GuestOnly}>
          <Route path="/login" component={Login} />
        </Route>
      </Route>
    </Route>
  )
}
