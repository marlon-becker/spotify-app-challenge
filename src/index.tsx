import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import './styles/_main.scss'
import { spotifyAuth } from './pods/api/spotifyAuth'
import {
  AuthContext,
  authorized,
  initialState,
  reducer,
  unauthorized,
} from './pods/auth'
import Layout from './pods/shared/components/Layout'
import HomeContainer from './pods/home/HomeContainer'
import Message from './pods/shared/components/Message'

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

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
      <Layout>
        {!state.isAuthorizing && state.isAuthorized && <HomeContainer />}
        {state.isAuthorizing && <Message>Loading</Message>}
        {!state.isAuthorizing && !state.isAuthorized && (
          <Message>Error with Spotify authorization</Message>
        )}
      </Layout>
    </AuthContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
