import { take, call, put } from 'redux-saga/effects'
import {
  fetchVillage,
  enterVillage
} from '../actions/village'
import superFetch from '../modules/superFetch'

export function* handleFetchVillage() {
  console.log("handleFetchVillage");
  while (true) {
    const action = yield take(`${fetchVillage}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/village/',
      type: 'POST',
      data: action.payload
    })

    if (!payload && err) {
      yield put(failFetchingVillage(String(err).split('Error: ')[1]));
      continue;
    }

    yield put(enterVillage(payload.Item))
  }
}
