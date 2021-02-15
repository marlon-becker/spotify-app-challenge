import React, { FC } from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SpotifyItem } from 'pods/api/types'
import styles from './Section.module.scss'
import ItemsList from './ItemsList'

interface Props {
  items: SpotifyItem[]
  title: string
}

const Section: FC<Props> = (props) => {
  return (
    <section>
      <header className={styles.header}>
        <h3>{props.title}</h3>
        <div className={styles.separator} />
        <div className={styles.actions}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </header>
      <main>
        <ItemsList items={props.items} />
      </main>
    </section>
  )
}

export default Section
