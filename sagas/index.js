import { fork } from 'redux-saga/effects'
import * as client from './client'
import * as user from './user'
import * as village from './village'

export default function* rootSaga() {
  // client
  yield fork(client.handleFetchLoginState)
  yield fork(client.handleLogin)
  yield fork(client.handleLogout)
  yield fork(client.handleSignUp)
  yield fork(client.handleFetchFriend)

  // user
  yield fork(user.handleSearchUser)
  yield fork(user.handleFriendRequest)

  // village
  yield fork(village.handleFetchVillage)
}
