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
    default:
      return state
  }
}
