import { combineReducers } from 'redux'
import auth from './auth'
import village from './village'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth,
  village,
  routing: routerReducer
})

export default rootReducer
