import React, { FC } from 'react'

import { SpotifyItem } from 'pods/api/types'
import styles from './Item.module.scss'

interface Props {
  item: SpotifyItem
}

const Item: FC<Props> = ({ item }) => {
  return (
    <li className={`${styles.item} animate__animated animate__fadeIn`}>
      <img alt={item.name} src={item.images[0].url} />
      <p>{item.name}</p>
    </li>
  )
}

export default Item
