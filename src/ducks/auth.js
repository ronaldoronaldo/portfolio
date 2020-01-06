//action types
export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT'
}

//Reducer

const initialState = {
  isLogged: false,
  token: null,
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, isLogged: !state.isLogged }
    case Types.LOGOUT:
      return console.log('logout')
    default:
      return state
  }
}

export function login(username, password) {
  return {
    type: Types.LOGIN,
    payload: {
      username,
      password
    }
  }
}

export function logout() {
  return {
    type: Types.LOGOUT
  }
}

export default reducer
