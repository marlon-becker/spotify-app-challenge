import React, { FC } from 'react'

import Item from './Item'
import styles from './Items.module.scss'

interface Props {
  items: any[]
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
