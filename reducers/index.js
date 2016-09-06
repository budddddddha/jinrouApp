import { combineReducers } from 'redux'
import auth from './auth'
import friend from './friend'
import user from './user'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth,
  friend,
  user,
  village,
  routing: routerReducer
})

export default rootReducer
