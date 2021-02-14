import React, { FC } from 'react'

import styles from './Avatar.module.scss'

interface Props {
  name: string
  image: string
}

const Avatar: FC<Props> = (props) => {
  return (
    <div className={styles.avatar}>
      <img alt="Avatar" src={props.image} />
      <p className={styles.name}>{props.name}</p>
    </div>
  )
}

export default Avatar
