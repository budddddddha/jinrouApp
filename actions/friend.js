import * as types from '../constants/ActionTypes'
import { createAction } from "redux-actions"

export const fetchFriend = createAction(types.FETCH_FRIEND)
export const updateFriend = createAction(types.UPDATE_FRIEND)
