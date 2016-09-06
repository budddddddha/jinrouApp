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
  fetchFriends,
  fetchFriend,
  updateFriend
} from '../actions/auth'
import superFetch from '../modules/superFetch'

export function* handleFetchLoginState() {
  console.log("handleFetchLoginState");
  while (true) {
    yield take(`${fetchLoginState}`);

    const jwt = localStorage.getItem('jwt');
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

      if (payload && !err) {
        yield put(login(Object.assign({}, payload[0], { jwt })));
        continue;
      }
    }

    yield put(failFetchingLoginState());
  }
}

export function* handleLogin() {
  console.log("handleLogin");
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
      yield put(failFetchingUser(String(payload.err.data.message)));
      continue;
    }

    const jwt = payload[0].jsonWebToken;
    localStorage.setItem('jwt', jwt);
    const ret = Object.assign({}, payload[0], { jwt })

    yield put(login(ret));
  }
}

export function* handleLogout() {
  console.log("handleLogout");
  while (true) {
    yield take(`${clickLogout}`);
    localStorage.removeItem('jwt');

    yield put(logout());
  }
}

export function* handleSignUp() {
  console.log("handleSignUp");
  while (true) {
    const action = yield take(`${signup}`)
    const { payload, err } = yield call(superFetch, {
      url: '/api/signup/',
      type: 'POST',
      data: action.payload
    });

    const jwt = payload[0].jsonWebToken;
    localStorage.setItem('jwt', jwt);
    const ret = Object.assign({}, payload[0], { jwt })

    yield put(login(ret));
  }
}

export function* handleFetchFriends() {
  console.log("handleFetchFriends");
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
