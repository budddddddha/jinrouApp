import * as types from '../constants/ActionTypes'
import { createAction } from "redux-actions"

export const fetchVillage           = createAction(types.FETCH_VILLAGE)
export const enterVillage           = createAction(types.ENTER_VILLAGE, (villageData) => ({villageData: villageData}))
