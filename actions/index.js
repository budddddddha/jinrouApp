import * as client from './client'
import * as user from './user'
import * as village from './village'

const actions = Object.assign(
  {},
  client,
  user,
  village
)
export default actions
