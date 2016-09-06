import { fork } from 'redux-saga/effects'
import * as auth from './auth'
import * as user from './user'
import * as village from './village'

export default function* rootSaga() {
  // auth
  yield fork(auth.handleFetchLoginState)
  yield fork(auth.handleLogin)
  yield fork(auth.handleLogout)
  yield fork(auth.handleSignUp)
  yield fork(auth.handleFetchFriend)

  // user
  yield fork(user.handleSearchUser)
  yield fork(user.handleFriendRequest)

  // village
  yield fork(village.handleFetchVillage)
}
