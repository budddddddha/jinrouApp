'use strict'
// action: アクションを選択する
// reducerのaction.typeに[type]である'INCREMENT'を流し込む


export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const kaesu = (input) => {
  return {
    type: 'KAESU',
    input
  }
}
