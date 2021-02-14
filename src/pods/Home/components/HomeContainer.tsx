import React, { FC } from 'react'
import Section from './Section'
import useMultipleRequest from '../../shared/hooks/useMultipleRequests'
import ItemsList from './ItemsList'

const Content: FC = () => {
  const {
    categories,
    newReleases,
    featuredPlaylists,
    isLoading,
    isError
  } = useMultipleRequest()

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error loading</div>

  return (
    <>
      <Section title={'Release this week'}>
        <ItemsList items={categories} />
      </Section>
      <Section title={'Featured playlists'}>
        <ItemsList items={newReleases} />
      </Section>
      <Section title={'Browse'}>
        <ItemsList items={featuredPlaylists} />
      </Section>
    </>
  )
}

export default Content
