import * as types from '../constants/ActionTypes'
import { createAction } from "redux-actions"

export const login                  = createAction(types.LOG_IN, (userData) => ({userData: userData}))
export const clickLogout            = createAction(types.CLICK_LOG_OUT)
export const logout                 = createAction(types.LOG_OUT)
export const fetchLoginState        = createAction(types.FETCH_LOGIN_STATE)
export const failFetchingLoginState = createAction(types.FAIL_FETCHING_LOGIN_STATE)
export const fetchUser              = createAction(types.FETCH_USER)
export const failFetchingUser       = createAction(types.FAIL_FETCHING_USER, (err) => ({error: err}))
export const signup                 = createAction(types.SIGN_UP)
export const passwordError          = createAction(types.PASSWORD_ERROR)
export const fetchFriends           = createAction(types.FETCH_FRIENDS)
