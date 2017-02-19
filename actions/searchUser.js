import * as types from '../constants/ActionTypes'
import { createAction } from "redux-actions"

export const searchUser = createAction(types.SEARCH_USER)
export const fetchSearchUser = createAction(types.FETCH_SEARCH_USER)
export const updateSearchedUser = createAction(types.UPDATE_SEARCHED_USER, (userData) => ({userData: userData}))
export const friendRequest = createAction(types.FRIEND_REQUEST)
export const updateFriendRequest　= createAction(types.UPDATE_FRIEND_REQUEST)
