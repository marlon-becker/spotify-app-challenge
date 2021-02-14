import React, { FC } from 'react'

import { Image } from 'pods/api/types'
import styles from './Item.module.scss'

interface Props {
  item: {
    name: string,
    images: Image[]

  }
}

const Item: FC<Props> = ({ item }) => {
  return (
    <li className={[styles.item, "animate__animated animate__fadeIn"].join(' ')}>
      <img alt={item.name} src={item.images[0].url} />
      <p>{item.name}</p>
    </li>
  )
}

export default Item
