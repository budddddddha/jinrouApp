import {
  ENTER_VILLAGE
} from '../constants/ActionTypes'

const initialState = {
  id: undefined,
  master: undefined,
  members: [],
  isEnter: false
}

const member = {
  id: undefined,
  name: undefined,
  role : undefined,
  isAlive: true
}

// roles
// GM(ゲームマスター),
// Werewolf(人狼),
// Seer(予言者, 占い師),
// Villager(村人),
// Doctor(医師),
// (霊媒師)
// (狩人)
// (狂人)

export default function village(state = initialState, action) {
  console.log("action=",action);
  switch (action.type) {
    case ENTER_VILLAGE:
      return Object.assign({}, state, {
        id: action.payload.villageData.Id,
        master: action.payload.villageData.Master,
        members: action.payload.villageData.Members,
        isEnter: true
      })
    default:
      return state
  }
}
