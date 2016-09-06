import { combineReducers } from 'redux'
import client from './client'
import user from './user'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  client,
  user,
  village,
  routing: routerReducer
})

export default rootReducer
