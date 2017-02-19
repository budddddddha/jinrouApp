import { fork } from 'redux-saga/effects'
import * as client from './client'
import * as searchUser from './searchUser'
import * as village from './village'

export default function* rootSaga() {
  // client
  yield fork(client.handleFetchLoginState)
  yield fork(client.handleLogin)
  yield fork(client.handleLogout)
  yield fork(client.handleSignUp)
  yield fork(client.handleFetchFriend)

  // searchUser
  yield fork(searchUser.handleSearchUser)
  yield fork(searchUser.handleFriendRequest)

  // village
  yield fork(village.handleFetchVillage)
  yield fork(village.handleMakeVillage)
}
