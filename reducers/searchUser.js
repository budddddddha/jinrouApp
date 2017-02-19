import {
  FETCH_SEARCH_USER,
  UPDATE_SEARCHED_USER,
  UPDATE_FRIEND_REQUEST
} from '../constants/ActionTypes'

const initialState = {
  // View
  error: undefined,
  isFetching: false,

  // DB
  accountData: {
    id: undefined,
    name: undefined
  }
};

export default function searchUser(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    case FETCH_SEARCH_USER:
      return Object.assign({}, state, {isFetching: true, error: undefined})
    case UPDATE_SEARCHED_USER:
      return Object.assign({}, state, {
        accountData: {
          id  : action.payload.userData.id,
          name: action.payload.userData.name
        },
        isFetching: false,
        error: undefined
      })
    case UPDATE_FRIEND_REQUEST:
      return Object.assign({}, state)
    default:
      return state
  }
}
