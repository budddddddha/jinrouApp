import { take, call, put } from 'redux-saga/effects'
import {
  fetchVillage,
  enterVillage,
  makeVillage,
  madeVillage
} from '../actions/village'
import superFetch from '../modules/superFetch'

export function* handleFetchVillage() {
  console.log("handleFetchVillage");
  while (true) {
    const action = yield take(`${fetchVillage}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/village/fetch',
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

export function* handleMakeVillage() {
  while (true) {
    const action = yield take(`${makeVillage}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/village/make_village',
      type: 'POST',
      data: action.payload
    })

    console.log("payload=", payload);

    if (!payload && err) {
      yield put(failMakeVillage(String(err).split('Error: ')[1]));
      continue;
    }

    yield put(madeVillage(payload.Item))
  }
}
