import * as React from 'react'
import { render, screen } from '@testing-library/react'
import HomeContainer from '../HomeContainer'
import useHomeContent from '../hooks/useHomeContent'

jest.mock('pods/home/hooks/useHomeContent')

describe('Give HomeContainer', () => {
  describe('When content is loading', () => {
    it('Then it should show loading message', () => {
      useHomeContent.mockImplementation(() => ({
        categories: [],
        newReleases: [],
        featuredPlaylists: [],
        isLoading: true,
        isError: false,
      }))

      render(<HomeContainer />)

      expect(screen.getByText('Loading')).toBeInTheDocument()
    })
  })

  describe('When content response is an error', () => {
    it('Then it should show loading message', () => {
      useHomeContent.mockImplementation(() => ({
        categories: [],
        newReleases: [],
        featuredPlaylists: [],
        isLoading: false,
        isError: true,
      }))

      render(<HomeContainer />)

      expect(screen.getByText('Error loading content')).toBeInTheDocument()
    })
  })

  describe('When content is loaded', () => {
    it('Then it should show sections', () => {
      useHomeContent.mockImplementation(() => ({
        categories: [],
        newReleases: [],
        featuredPlaylists: [],
        isLoading: false,
        isError: false,
      }))

      render(<HomeContainer />)

      expect(screen.getByText('Release this week')).toBeInTheDocument()
      expect(screen.getByText('Featured playlists')).toBeInTheDocument()
      expect(screen.getByText('Browse')).toBeInTheDocument()
    })
  })
})
