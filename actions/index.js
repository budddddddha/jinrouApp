import * as auth from './auth'
import * as friend from './friend'
import * as village from './village'

const actions = Object.assign(
  {},
  auth,
  friend,
  village
)
export default actions
