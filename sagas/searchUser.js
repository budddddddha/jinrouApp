import { take, call, put } from 'redux-saga/effects'
import {
  searchUser,
  updateSearchedUser,
  friendRequest,
  updateFriendRequest
} from '../actions/searchUser'
import superFetch from '../modules/superFetch'

export function* handleSearchUser() {
  console.log("handleSearchUser");
  while (true) {
    const action = yield take(`${searchUser}`)

    const { payload, err } = yield call(superFetch, {
      url: '/api/search_user',
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
      url: '/api/search_user/friend_request',
      type: 'POST',
      data: action.payload
    });

    yield put(updateFriendRequest(payload))
  }
}
