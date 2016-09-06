import * as auth from './auth'
import * as user from './user'
import * as village from './village'

const actions = Object.assign(
  {},
  auth,
  user,
  village
)
export default actions
