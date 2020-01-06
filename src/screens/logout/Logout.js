import {
  LOGIN_JWT
} from 'config/vars'

const Logout = () => {
  global.localStorage.removeItem(LOGIN_JWT)
  global.location = '/'
  return null
}

export default Logout
