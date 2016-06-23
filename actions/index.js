import * as types from '../constants/ActionTypes'

export function logIn(id, name, password) {
  return { type: types.LOG_IN, name, password}
}
