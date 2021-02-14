import { reducer, initialState } from '../index'

import * as stubs from './stubs'

describe('Given auth reducer function', () => {
  describe('When actions type is VALID_TOKEN', () => {
    it('Then it should return valid state', () => {
      const action = {
        type: 'VALID_TOKEN',
        token: stubs.token
      }

      expect(reducer(initialState, action)).toEqual({
        isAuthorizing: false,
        isAuthorized: true,
        token: stubs.token
      })
    })
  })

  describe('When actions type is INVALID_TOKEN', () => {
    it('Then it should return valid state', () => {
      const action = { type: 'INVALID_TOKEN' }

      expect(reducer(initialState, action)).toEqual({
        isAuthorizing: false,
        isAuthorized: false,
        token: undefined
      })
    })
  })

  describe('When actions type is NOT_EXISTING_ACTION', () => {
    it('Then it should return default state', () => {
      const action = { type: 'NOT_EXISTING_ACTION' }

      expect(reducer(initialState, action)).toEqual({
        isAuthorizing: true,
        isAuthorized: false,
        token: undefined
      })
    })
  })
})



