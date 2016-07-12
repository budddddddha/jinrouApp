import { fork } from 'redux-saga/effects'
import * as auth from './auth'
import * as village from './village'

export default function* rootSaga() {
  yield fork(auth.handleFetchLoginState)
  yield fork(auth.handleLogin)
  yield fork(auth.handleLogout)
  
  yield fork(village.handleFetchVillage)
}
