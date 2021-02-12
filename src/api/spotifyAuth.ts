import { encode } from 'js-base64'
import axios from 'axios'

import config from './config'

interface SpotifyAuthResponse {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  scope: string
}

export const spotifyAuth = async (): Promise<SpotifyAuthResponse> => {
  const { REACT_APP_SPOTIFY_CLIENT_SECRET, REACT_APP_SPOTIFY_CLIENT_ID } = process.env
  const credentials = encode(
    `${REACT_APP_SPOTIFY_CLIENT_ID}:${REACT_APP_SPOTIFY_CLIENT_SECRET}`
  )

  const body = new URLSearchParams()
  body.set('grant_type', 'client_credentials')

  const response = await axios.post<SpotifyAuthResponse>(
    config.api.authUrl,
    body,
    {
      headers: {
        Authorization: `Basic ${credentials}`
      }
    }
  ).catch((error) => {
    throw Error(`Authorization failed: ${error}`)
  })

  return response.data
}
