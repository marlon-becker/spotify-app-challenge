import SpotifyWebApi from 'spotify-web-api-js'

import { Album, Category, PlayList, SpotifyApi } from './types'

export const transformNewReleases = (releases: SpotifyApi.ListOfNewReleasesResponse) => {
  return releases.albums.items.map((album => ({
    albumType: album.album_type,
    images: album.images,
    name: album.name
  })))
}

export const transformFeaturedPlaylists = (
  featuredPlaylists: SpotifyApi.ListOfFeaturedPlaylistsResponse
) => {
  return featuredPlaylists.playlists.items.map((playlist) => ({
    images: playlist.images,
    name: playlist.name
  }))
}

export const transformCategories = (categories: SpotifyApi.MultipleCategoriesResponse) => {
  return categories.categories.items.map((category) => ({
    images: category.icons,
    name: category.name
  }))
}

export type spotifyApiResponse = Promise<Category[]> | Promise<PlayList[]> | Promise<Album[]>

const spotifyWebApi = (token): SpotifyApi  => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token)

  return {
    getCategories: async () => {
      const categories = await spotifyApi.getCategories()

      return transformCategories(categories)
    },
    getFeaturedPlaylists: async () => {
      const featuredPlayLists = await spotifyApi.getFeaturedPlaylists()

      return transformFeaturedPlaylists(featuredPlayLists)
    },
    getNewReleases: async () => {
      const releases = await spotifyApi.getNewReleases()

      return transformNewReleases(releases)
    }
  }
}

export default spotifyWebApi
