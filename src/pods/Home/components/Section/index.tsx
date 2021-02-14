import React, { FC } from 'react'

import styles from './Section.module.scss'
import ItemsList from './ItemsList'

interface Props {
  items: any[]
  title: string
}

const Section: FC<Props> = (props) => {
  return (
    <section>
      <header>
        <h3 className={styles.header}>
          <span>{props.title}</span>
        </h3>
      </header>
      <main>
        <ItemsList items={props.items} />
      </main>
    </section>
  )
}

export default Section
