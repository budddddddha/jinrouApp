import * as types from '../constants/ActionTypes'

export function logIn(name, password) {
  return { type: types.LOG_IN, name, password}
}

export function logOut(name, password) {
  return { type: types.LOG_OUT, name, password}
}
