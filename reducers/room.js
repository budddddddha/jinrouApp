import { LOG_IN, LOG_OUT } from '../constants/ActionTypes'

const initialState = {
  id: '123',
  member: [2,3]
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    // case LOG_IN:
    //   return {
    //     id: '1',
    //     name: action.name,
    //     password: action.password,
    //     login: true
    //   }
    // case LOG_OUT:
    //   return {
    //     id: '1',
    //     name: action.name,
    //     password: action.password,
    //     login: false
    //   }
    default:
      return state
  }
}
