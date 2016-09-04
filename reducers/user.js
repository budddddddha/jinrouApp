import {
  FETCH_SEARCH_USER,
  UPDATE_SEARCHED_USER,
  UPDATE_FRIEND_REQUEST
} from '../constants/ActionTypes'

const initialState = {
  user: {
    id: undefined,
    name: undefined
  },
  isFetching: false,
  error: undefined
};

export default function user(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    case FETCH_SEARCH_USER:
      return Object.assign({}, state, {isFetching: true, error: undefined})
    case UPDATE_SEARCHED_USER:
      return Object.assign({}, state, {
        user: {
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
