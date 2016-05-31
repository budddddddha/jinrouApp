'use strict'


import { combineReducers } from 'redux'
import countter from './count'
import oumu from './oumu'

const jinrouApp = combineReducers({
  countter,
  oumu
})

export default jinrouApp
