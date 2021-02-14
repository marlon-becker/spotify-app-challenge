import { authorized, unauthorized } from '../index'
import * as stubs from './stubs'

describe('Given auth reducer actions', () => {
  describe('When authorized actions is called', () => {
    it('Then should match action object', () => {
      const action = authorized(stubs.token)

      expect(action).toEqual({
        type: 'VALID_TOKEN',
        token: stubs.token,
      })
    })
  })
  describe('When unauthorized actions is called', () => {
    it('Then should match action object', () => {
      const action = unauthorized()

      expect(action).toEqual({ type: 'INVALID_TOKEN' })
    })
  })
})
