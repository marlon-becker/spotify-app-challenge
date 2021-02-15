export interface Image {
  height?: number
  url: string
  width?: number
}

export interface SpotifyItem {
  images: Image[]
  name: string
}

export interface SpotifyApi {
  getCategories: () => Promise<SpotifyItem[]>
  getFeaturedPlaylists: () => Promise<SpotifyItem[]>
  getNewReleases: () => Promise<SpotifyItem[]>
}
