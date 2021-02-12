import SpotifyWebApi from 'spotify-web-api-js'

import spotifyWebApi from '../spotifyWebApi'
import * as stubs from './stubs'
import newReleases from './fixtures/newReleases.json'
import categories from './fixtures/categories.json'
import featuredPlaylists from './fixtures/featuredPlaylists.json'

jest.mock('spotify-web-api-js')

const mockedSpotifyWebApi = SpotifyWebApi as jest.Mocked<typeof SpotifyWebApi>

describe('Given the spotifyWebApi implementation', () => {
  describe('When spotifyWebApi is initialized', () => {
    it('Then it should set token', () => {
      const setAccessToken = jest.fn()
      mockedSpotifyWebApi.mockImplementation(() => ({ setAccessToken }))
      spotifyWebApi(stubs.token)

      expect(setAccessToken).toHaveBeenCalledWith(stubs.token)
    })
  })

  describe('When newReleases is called', () => {
    it('Then it should return transformed newReleases', async () => {
      mockedSpotifyWebApi.mockImplementation(() => ({
        setAccessToken: jest.fn(),
        getNewReleases: () => Promise.resolve(newReleases)
      }))
      const api = spotifyWebApi(stubs.token)
      const response = await api.getNewReleases()

      expect(response).toEqual(stubs.transformedNewReleases)
    })
  })

  describe('When getFeaturedPlaylists is called', () => {
    it('Then it should return transformed featuredPlaylists', async () => {
      mockedSpotifyWebApi.mockImplementation(() => ({
        setAccessToken: jest.fn(),
        getFeaturedPlaylists: () => Promise.resolve(featuredPlaylists)
      }))
      const api = spotifyWebApi(stubs.token)
      const response = await api.getFeaturedPlaylists()

      expect(response).toEqual(stubs.transformedFeaturedPlaylists)
    })
  })

  describe('When getCategories is called', () => {
    it('Then it should return transformed categories', async () => {
      mockedSpotifyWebApi.mockImplementation(() => ({
        setAccessToken: jest.fn(),
        getCategories: () => Promise.resolve(categories)
      }))
      const api = spotifyWebApi(stubs.token)
      const response = await api.getCategories()

      expect(response).toEqual(stubs.transformedCategories)
    })
  })
})
