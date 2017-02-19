import {
  ENTER_VILLAGE,
  MADE_VILLAGE
} from '../constants/ActionTypes'

const initialState = {
  id: undefined,
  master: undefined,
  members: [],
  isEnter: false,
  stage: '',
  isMade: false
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
    case MADE_VILLAGE:
      return Object.assign({}, state, {
        id: action.payload.villageData.Id,
        members: Array.from(action.payload.villageData.Members.values),
        stage: action.payload.villageData.Stage,
        isMade: true
      })
    default:
      return state
  }
}
