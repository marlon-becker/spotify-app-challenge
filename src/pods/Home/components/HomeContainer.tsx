import React, { FC } from 'react'
import Section from './Section'
import useHomeContent from '../hooks/useHomeContent'
import Message from '../../shared/components/Message'

const Content: FC = () => {
  const {
    categories,
    newReleases,
    featuredPlaylists,
    isLoading,
    isError,
  } = useHomeContent()

  if (isLoading) return <Message>Loading</Message>
  if (isError) return <Message>Error loading</Message>

  return (
    <>
      <Section title={'Release this week'} items={categories} />
      <Section title={'Featured playlists'} items={newReleases} />
      <Section title={'Browse'} items={featuredPlaylists} />
    </>
  )
}

export default Content
