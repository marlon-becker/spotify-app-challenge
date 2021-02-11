import axios from 'axios'
import { auth } from '../auth'
import * as stubs from './stubs'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Given spotify auth', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('When request is made to spotify auth endpoint', () => {
    describe('And has a valid response', () => {
      beforeEach(() => {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(stubs.axiosResponse))
      })
      it('Then it should make post call', async () => {
        await auth()

        expect(mockedAxios.post).toHaveBeenCalled()
      })
    })

    describe('And has an error response', () => {
      beforeEach(() => {
        mockedAxios.post.mockImplementationOnce(() =>
          Promise.reject(stubs.errorMessage),
        );
      })
      it('Then should return error message', async () => {
        await expect(auth()).rejects.toThrow(`Authorization failed: ${stubs.errorMessage}`);
      })
    })
  })
})
