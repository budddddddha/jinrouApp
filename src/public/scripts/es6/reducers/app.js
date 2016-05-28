'use strict'
// reducer: 状態遷移を管理
// initialState: 初期状態

// 初期ステート設定
const initialState = {
  fuga: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': {
        return { fuga: state.fuga + 1 }
    }
    default:
      return state
  }
}
