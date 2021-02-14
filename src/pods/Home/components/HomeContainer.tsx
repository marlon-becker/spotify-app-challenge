import React, { FC } from 'react'
import Section from './Section'
import useMultipleRequest from '../../shared/hooks/useMultipleRequests'

const Content: FC = () => {
  const {
    categories,
    newReleases,
    featuredPlaylists,
    isLoading,
    isError,
  } = useMultipleRequest()

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error loading</div>

  return (
    <>
      <Section title={'Release this week'} items={categories} />
      <Section title={'Featured playlists'} items={newReleases} />
      <Section title={'Browse'} items={featuredPlaylists} />
    </>
  )
}

export default Content
