import React, { FC, ReactNode } from 'react'

import styles from './MenuItem.module.scss'

interface Props {
  children: ReactNode
}

const MenuItem: FC<Props> = (props) => {
  return (
    <li className={styles.menuItem}>
      <div className={styles.background}>&nbsp;</div>
      <div className={styles.content}>{props.children}</div>
    </li>
  )
}

export default MenuItem
