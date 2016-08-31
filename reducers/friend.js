import {
  UPDATE_FRIEND
} from '../constants/ActionTypes'

const initialState = {
  isPrepared: false,
  isLoggedIn: false,
  user: {
    id: undefined,
    name: undefined
  },
  isFetching: false,
  error: undefined,

  gameData: {
    friends: [],
    villages: []
  }
};

export default function friend(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    // case FAIL_FETCHING_LOGIN_STATE:
    //   return Object.assign({}, state, {isPrepared: true})
    // case FETCH_USER:
      // return Object.assign({}, state, {isFetching: true, error: undefined})
    // case FAIL_FETCHING_USER:
    //   return Object.assign({}, state, {isFetching: false, error: action.payload.error})
    case UPDATE_FRIEND:
      return Object.assign({}, state, {
        isPrepared: true,
        isLoggedIn: true,
        user: {
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
    // case LOG_OUT:
    //   return Object.assign({}, initialState.auth, {isPrepared: true})
    // case PASSWORD_ERROR:
    //   console.log("PASSWORD_ERROR");
    //   return Object.assign({}, state, {isFetching: false, error: action.payload})
    default:
      return state
  }
}
