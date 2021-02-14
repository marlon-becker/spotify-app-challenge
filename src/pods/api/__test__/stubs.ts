import { AxiosResponse } from 'axios'

export const token = 'FAKE_TOKEN'

export const axiosResponse: AxiosResponse = {
  data: {
    access_token: 'ACCESS_TOKEN',
    token_type: 'Bearer',
    expires_in: 3600,
    scope: 'scope',
  },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
}

export const errorMessage = 'Error message'

export const transformedNewReleases = [
  {
    albumType: 'album',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273b02a3380a69bd2418a1f68f1',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02b02a3380a69bd2418a1f68f1',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851b02a3380a69bd2418a1f68f1',
        width: 64,
      },
    ],
    name: 'Judas and the Black Messiah: The Inspired Album',
  },
  {
    albumType: 'single',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2735a781df1741539e2817ad357',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e025a781df1741539e2817ad357',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048515a781df1741539e2817ad357',
        width: 64,
      },
    ],
    name: 'LOCATION',
  },
]

export const transformedFeaturedPlaylists = [
  {
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706f00000003982963e5b335206c2f6cf347',
        width: null,
      },
    ],
    name: 'New Music Friday',
  },
  {
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b',
        width: null,
      },
    ],
    name: 'Feel Good Friday',
  },
]

export const transformedCategories = [
  {
    images: [
      {
        height: 275,
        url:
          'https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg',
        width: 275,
      },
    ],
    name: 'Top Lists',
  },
  {
    images: [
      {
        height: 274,
        url:
          'https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg',
        width: 274,
      },
    ],
    name: 'Romance',
  },
]
