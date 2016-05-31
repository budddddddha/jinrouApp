'use strict'

const oumu = (state = '', action) => {
  switch (action.type) {
    case 'KAESU':
      return action.input
      break;
    default:
      return state
  }
}

export default oumu
