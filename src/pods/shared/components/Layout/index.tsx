import React, { FC } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import styles from './Layout.module.scss'
import Player from './Player'

const Index: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Header />
        <main className={styles.container}>
          {children}
        </main>
        <footer>
          <Player />
        </footer>
      </main>
    </div>
  )
}

export default Index
