import { take, call, put } from 'redux-saga/effects'
import {
  searchUser,
  updateSearchedUser,
  friendRequest,
  updateFriendRequest
} from '../actions/user'
import superFetch from '../modules/superFetch'

export function* handleSearchUser() {
  console.log("handleSearchUser");
  while (true) {
    const action = yield take(`${searchUser}`)

    const { payload, err } = yield call(superFetch, {
      url: '/api/user/search',
      type: 'POST',
      data: action.payload
    });

    yield put(updateSearchedUser(payload))
  }
}

export function* handleFriendRequest() {
  console.log("handleSearchUser");
  while (true) {
    const action = yield take(`${friendRequest}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/user/friend_request',
      type: 'POST',
      data: action.payload
    });

    yield put(updateFriendRequest(payload))
  }
}
