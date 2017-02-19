import { combineReducers } from 'redux'
import client from './client'
import searchUser from './searchUser'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  client,
  searchUser,
  village,
  routing: routerReducer
})

export default rootReducer
