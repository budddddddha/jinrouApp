import { take, call, put } from 'redux-saga/effects'
import {
  fetchLoginState,
  failFetchingLoginState,
  fetchUser,
  failFetchingUser,
  login,
  clickLogout,
  logout,
  signup,
  fetchFriends
} from '../actions/auth'
import superFetch from '../modules/superFetch'

export function* handleFetchLoginState() {
  console.log("handleFetchLoginState >>>");
  while (true) {
    yield take(`${fetchLoginState}`);

    const jwt = localStorage.getItem('jwt');
    console.log("jwt=",jwt);

    if (jwt) {
      const { payload, err } = yield call(superFetch, {
        url: '/api/login/',
        type: 'GET',
        custom: {
          headers: {
            authorization: `Bearer ${jwt}`
          }
        }
      });

      console.log("payload=",payload);
      console.log("err=",err);

      if (payload && !err) {
        yield put(login(Object.assign({}, payload[0], { jwt })));
        continue;
      }
    }

    yield put(failFetchingLoginState());
  }
}

export function* handleLogin() {
  while (true) {
    const action = yield take(`${fetchUser}`);
    const { payload, err } = yield call(superFetch, {
      url: '/api/login/',
      type: 'POST',
      data: action.payload
    });

    console.log("payload?!?!=",payload);
    console.log("err=",err);

    if ('err' in payload) {
      console.log("fetchUser ERROR");
      console.log("hoge",String(payload.err).split('Error: ')[1]);
      yield put(failFetchingUser(String(payload.err.data.message)));
      continue;
    }

    const jwt = payload[0].jsonWebToken;
    console.log("jwt=",jwt);

    localStorage.setItem('jwt', jwt);

    const ret = Object.assign({}, payload[0], { jwt })
    console.log("ret=",ret);

    yield put(login(ret));
  }
}

export function* handleLogout() {
  while (true) {
    yield take(`${clickLogout}`);

    localStorage.removeItem('jwt');

    yield put(logout());
  }
}

export function* handleSignUp() {
  while (true) {
    const action = yield take(`${signup}`)

    console.log("handleSignUp");

    const { payload, err } = yield call(superFetch, {
      url: '/api/signup/',
      type: 'POST',
      data: action.payload
    });
    console.log("payload?!?!=",payload);
    console.log("err=",err);

    const jwt = payload[0].jsonWebToken;
    console.log("jwt=",jwt);
    localStorage.setItem('jwt', jwt);
    const ret = Object.assign({}, payload[0], { jwt })
    console.log("ret=",ret);

    yield put(login(ret));
  }
}

export function* handleFetchFriends() {
  while (true) {
    const action = yield take(`${fetchFriends}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/fetch_friends',
      type: 'POST',
      data: action.payload
    });
    yield put(addFriends())
  }
}
