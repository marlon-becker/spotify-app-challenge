import React, { FC, ReactNode } from 'react'

import styles from './Section.module.scss'

interface Props {
  children: ReactNode,
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
        {props.children}
      </main>
    </section>
  )
}

export default Section
