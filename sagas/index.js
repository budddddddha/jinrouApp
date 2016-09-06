import { fork } from 'redux-saga/effects'
import * as client from './client'
import * as friend from './friend'
import * as user from './user'
import * as village from './village'

export default function* rootSaga() {
  // client
  yield fork(client.handleFetchLoginState)
  yield fork(client.handleLogin)
  yield fork(client.handleLogout)
  yield fork(client.handleSignUp)

  // friend
  yield fork(friend.handleFetchFriend)

  // user
  yield fork(user.handleSearchUser)
  yield fork(user.handleFriendRequest)

  // village
  yield fork(village.handleFetchVillage)
}
