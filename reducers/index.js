import { combineReducers } from 'redux'
import auth from './auth'
import friend from './friend'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth,
  friend,
  village,
  routing: routerReducer
})

export default rootReducer
