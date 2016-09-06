import * as client from './client'
import * as friend from './friend'
import * as user from './user'
import * as village from './village'

const actions = Object.assign(
  {},
  client,
  friend,
  user,
  village
)
export default actions
