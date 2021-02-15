import React, { FC } from 'react'

import { SpotifyItem } from 'pods/api/types'
import styles from './ItemsList.module.scss'
import Item from './Item'

interface Props {
  items: SpotifyItem[]
}

const ItemsList: FC<Props> = ({ items }) => {
  return (
    <ul className={styles.itemsList}>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  )
}

export default ItemsList
