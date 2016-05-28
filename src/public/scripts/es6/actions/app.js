'use strict'
// action: アクションを選択する
// reducerのaction.typeに[type]である'INCREMENT'を流し込む

export default {
  increment: () => {
    return { type: 'INCREMENT' }
  }
}

export function increment(){
    return {
        type: 'INCREMENT'
    }
}
