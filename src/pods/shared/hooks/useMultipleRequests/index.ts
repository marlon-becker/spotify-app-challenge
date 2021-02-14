import { useContext, useEffect, useState } from 'react'
import spotifyWebApi from '../../../api/spotifyWebApi'
import { AuthContext } from '../../../auth'

const useMultipleRequest = () => {
  const context = useContext(AuthContext)
  const api = spotifyWebApi(context.token)

  const [response, setResponse] = useState<any>([[], [], []])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const requestAll = async () => {
      setIsLoading(true)
      setIsError(false)
      Promise.all([
        api.getCategories(),
        api.getNewReleases(),
        api.getFeaturedPlaylists(),
      ])
        .then((responses) => {
          setResponse(responses)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(false)
        })
    }

    if (context.token) {
      requestAll()
    }
  }, [context.token])

  return {
    categories: response[0],
    newReleases: response[1],
    featuredPlaylists: response[2],
    isLoading,
    isError,
  }
}

export default useMultipleRequest
