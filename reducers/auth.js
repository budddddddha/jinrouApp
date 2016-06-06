import { LOG_IN } from '../constants/ActionTypes'
import authJson from '../auth.json'

const initialState = {
  id: '-1',
  name: '',
  password: '',
  login: false
}

const checkAuth = (name, password) => {
  json_data = JSON.parse(authJson)
  for (let i = 0; i < json_data.length; i++) {
    if (json_data[i].name == name && json_data[i].password == password) {
      return json_data[i]
    }
  }
  return undefined
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      console.log("LOG_IN")
      console.log("action.name=",action.name)
      console.log("action.password=",action.password)
      return {
        id: '-1',
        name: action.name,
        password: action.password,
        login: true
      }
    default:
      return state
  }
}
