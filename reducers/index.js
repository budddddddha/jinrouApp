import { combineReducers } from 'redux'
import todos from './todos'
import login from './login'

const rootReducer = combineReducers({
  todos,
  login
})

export default rootReducer
