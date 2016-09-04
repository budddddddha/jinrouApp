import { take, call, put } from 'redux-saga/effects'
import {
  fetchFriend,
  updateFriend
} from '../actions/friend'
import superFetch from '../modules/superFetch'

export function* handleFetchFriend() {
  while (true) {
    const action = yield take(`${fetchFriend}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/friend/fetch',
      type: 'POST',
      data: action.payload
    });

    yield put(updateFriend(payload))
  }
}
