import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth,
  user,
  village,
  routing: routerReducer
})

export default rootReducer
