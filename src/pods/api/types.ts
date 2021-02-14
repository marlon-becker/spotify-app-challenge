export interface Image {
  height?: number
  url: string
  width?: number
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
  getCategories: () => Promise<Category[]>
  getFeaturedPlaylists: () => Promise<PlayList[]>
  getNewReleases: () => Promise<Album[]>
}
