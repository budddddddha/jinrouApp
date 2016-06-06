import { combineReducers } from 'redux'
import todos from './todos'
// import login from './login'
import auth from './auth'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  todos,
  // login,
  auth,
  routing: routerReducer
})

export default rootReducer
