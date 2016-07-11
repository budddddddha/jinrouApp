import {
  LOG_IN,
  LOG_OUT
} from '../constants/ActionTypes'

const initialState = {
  id: undefined,
  master: undefined,
  members: []
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
  switch (action.type) {
    default:
      return state
  }
}
