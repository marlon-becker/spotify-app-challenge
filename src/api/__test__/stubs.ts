import { AxiosResponse } from 'axios'

export const axiosResponse: AxiosResponse = {
  data: {
    access_token: 'ACCESS_TOKEN',
    token_type: 'Bearer',
    expires_in: 3600,
    scope: 'scope',
  },
  status: 200,
  statusText: "OK",
  config: {},
  headers: {}
}

export const errorMessage = 'Error message'
