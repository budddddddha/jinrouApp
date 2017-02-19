import * as types from '../constants/ActionTypes'
import { createAction } from "redux-actions"

export const fetchVillage    = createAction(types.FETCH_VILLAGE)
export const enterVillage    = createAction(types.ENTER_VILLAGE, (villageData) => ({villageData: villageData}))
export const makeVillage     = createAction(types.MAKE_VILLAGE)
export const failMakeVillage = createAction(types.FAIL_MAKE_VILLAGE)
export const madeVillage     = createAction(types.MADE_VILLAGE, (villageData) => ({villageData: villageData}))
