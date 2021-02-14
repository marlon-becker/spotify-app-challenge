import React, { FC } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import styles from './Layout.module.scss'

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
        </footer>
      </main>
    </div>
  )
}

export default Index
