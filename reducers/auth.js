import {
  FAIL_FETCHING_LOGIN_STATE,
  FETCH_USER,
  FAIL_FETCHING_USER,
  LOG_IN,
  LOG_OUT,
  PASSWORD_ERROR
} from '../constants/ActionTypes'

const initialState = {
  isPrepared: false,
  isLoggedIn: false,
  user: {
    id: undefined,
    name: undefined,
    pass: undefined
  },
  isFetching: false,
  error: undefined,
  jwt: '',

  gameData: {
    villages: []
  }
};

export default function auth(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    case FAIL_FETCHING_LOGIN_STATE:
      return Object.assign({}, state, {isPrepared: true})
    case FETCH_USER:
      return Object.assign({}, state, {isFetching: true, error: undefined})
    case FAIL_FETCHING_USER:
      return Object.assign({}, state, {isFetching: false, error: action.payload.error})
    case LOG_IN:
      return Object.assign({}, state, {
        isPrepared: true,
        isLoggedIn: true,
        user: {
          id  : action.payload.userData.id,
          name: action.payload.userData.name,
          pass: action.payload.userData.pass,
        },
        isFetching: false,
        error: undefined,
        jwt: action.payload.userData.jwt,
        gameData: {
          villages: action.payload.userData.gameData.villages
        }
      })
    case LOG_OUT:
      return Object.assign({}, initialState.auth, {isPrepared: true})
    case PASSWORD_ERROR:
      console.log("PASSWORD_ERROR");
      return Object.assign({}, state, {isFetching: false, error: action.payload})
    default:
      return state
  }
}
