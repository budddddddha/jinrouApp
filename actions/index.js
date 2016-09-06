import * as auth from './auth'
import * as friend from './friend'
import * as user from './user'
import * as village from './village'

const actions = Object.assign(
  {},
  auth,
  friend,
  user,
  village
)
export default actions
