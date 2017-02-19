import * as client from './client'
import * as searchUser from './searchUser'
import * as village from './village'

const actions = Object.assign(
  {},
  client,
  searchUser,
  village
)
export default actions
