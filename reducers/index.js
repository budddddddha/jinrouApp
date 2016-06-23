import { combineReducers } from 'redux'
import auth from './auth'
import room from './room'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth,
  room,
  routing: routerReducer
})

export default rootReducer
