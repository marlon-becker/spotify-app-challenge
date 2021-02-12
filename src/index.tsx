import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles/_main.less'
import { spotifyAuth } from './api/spotifyAuth'
import {
  AuthContext,
  authorized,
  initialState,
  reducer,
  unauthorized
} from './auth'

const Test = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const authorize = async () => {
      try {
      const authResponse = await spotifyAuth()
      dispatch(authorized(authResponse.access_token))
      } catch (error) {
        dispatch(unauthorized())
      }
    }

    authorize()
  }, [])

  return (
    <AuthContext.Provider value={state}>
      {!state.isAuthorizing && state.isAuthorized && <div>Authorized</div>}
      {state.isAuthorizing && <div>Authorizing</div>}
      {!state.isAuthorizing && !state.isAuthorized && <div>Not authorized</div>}
    </AuthContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <div>Test</div>
  </React.StrictMode>,
  document.getElementById('root')
)
