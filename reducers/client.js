import {
  FAIL_FETCHING_LOGIN_STATE,
  FETCH_CLIENT,
  FAIL_FETCHING_CLIENT,
  LOG_IN,
  LOG_OUT,
  PASSWORD_ERROR
} from '../constants/ActionTypes'

const initialState = {
  // View
  error: undefined,
  isPrepared: false,
  isFetching: false,
  isLoggedIn: false,

  // DB
  accountData: {
    id: undefined,
    name: undefined
  },
  gameData: {
    friends: [],
    villages: []
  }
};

export default function client(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    case FAIL_FETCHING_LOGIN_STATE:
      return Object.assign({}, state, {isPrepared: true})
    case FETCH_CLIENT:
      return Object.assign({}, state, {isFetching: true, error: undefined})
    case FAIL_FETCHING_CLIENT:
      return Object.assign({}, state, {isFetching: false, error: action.payload.error})
    case LOG_IN:
      return Object.assign({}, state, {
        isPrepared: true,
        isLoggedIn: true,
        accountData: {
          id  : action.payload.userData.id,
          name: action.payload.userData.name,
        },
        isFetching: false,
        error: undefined,
        gameData: {
          friends: action.payload.userData.gameData.friends,
          villages: action.payload.userData.gameData.villages
        }
      })
    case LOG_OUT:
      return Object.assign({}, initialState.auth, {isPrepared: true})
    case PASSWORD_ERROR:
      return Object.assign({}, state, {isFetching: false, error: action.payload})
    default:
      return state
  }
}
