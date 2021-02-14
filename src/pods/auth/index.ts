import { createContext } from 'react'

export const initialState = {
  isAuthorizing: true,
  isAuthorized: false,
  token: undefined,
}

export const AuthContext = createContext(initialState)

enum ActionTypes {
  VALID_TOKEN = 'VALID_TOKEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
}

export const authorized = (token) => {
  return {
    type: ActionTypes.VALID_TOKEN,
    token,
  }
}

export const unauthorized = () => {
  return {
    type: ActionTypes.INVALID_TOKEN,
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.VALID_TOKEN:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: true,
        token: action.token,
      }
    case ActionTypes.INVALID_TOKEN:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: false,
        token: undefined,
      }
    default:
      return state
  }
}
