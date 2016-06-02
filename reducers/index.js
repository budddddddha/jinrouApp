import { combineReducers } from 'redux'
import todos from './todos'
import login from './login'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  todos,
  login,
  routing: routerReducer
})

export default rootReducer
