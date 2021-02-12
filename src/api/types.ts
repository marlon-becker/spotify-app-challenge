interface Image {
  height?: number
  url: string
  width?: number
}

interface Artist {
  images: Image[]
  name: string
}

export interface Album {
  albumType: string
  images: Image[]
  name: string
}

export interface PlayList {
  images: Image[]
  name: string
}

export interface Category {
  images: Image[]
  name: string
}

export interface SpotifyApi {
  getCategories: () => Promise<Category[]> | void
  getFeaturedPlaylists: () => Promise<PlayList[]> | void
  getNewReleases: () => Promise<Album[]> | void
}
