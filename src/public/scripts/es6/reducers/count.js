'use strict'
// reducer: 状態遷移を管理
// initialState: 初期状態

const countter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    default:
      return state
  }
}

export default countter
