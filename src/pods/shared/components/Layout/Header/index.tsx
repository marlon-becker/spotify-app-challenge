import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>Your favourite tunes</h1>
      <h2>
        All <FontAwesomeIcon className={styles.sun} icon={faSun} />️ and all
        <FontAwesomeIcon className={styles.moon} icon={faMoon} />️
      </h2>
    </header>
  )
}

export default Header
