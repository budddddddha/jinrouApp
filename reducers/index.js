import { combineReducers } from 'redux'
import client from './client'
import friend from './friend'
import user from './user'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  client,
  friend,
  user,
  village,
  routing: routerReducer
})

export default rootReducer
