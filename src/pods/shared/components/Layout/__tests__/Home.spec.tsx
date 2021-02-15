import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../index'

describe('Give Layout component', () => {
  describe('When layout is rendered', () => {
    beforeEach(() => {
      render(<Layout />)
    })

    it('Then it should have all the menu options', () => {
      expect(screen.getByText('Discover')).toBeInTheDocument()
      expect(screen.getByText('Search')).toBeInTheDocument()
      expect(screen.getByText('Favourites')).toBeInTheDocument()
      expect(screen.getByText('Playlists')).toBeInTheDocument()
      expect(screen.getByText('Charts')).toBeInTheDocument()
    })

    it('Then it should show titles', () => {
      expect(
        screen.getByText('Your favourite tunes').closest('h1')
      ).toBeInTheDocument()
      expect(screen.getByText(/and all/).closest('h2')).toBeInTheDocument()
    })

    it('Then it should show default avatar', () => {
      expect(screen.getByText('Bob Smith')).toBeInTheDocument()
      expect(screen.getByAltText('Avatar')).toHaveAttribute(
        'src',
        '/assets/images/avatar.svg'
      )
    })

    it('Then it should have default player', () => {
      expect(screen.getByText("Nothing's playing")).toBeInTheDocument()
    })
  })
})
