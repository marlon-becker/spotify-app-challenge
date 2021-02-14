import React, { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

import {
  faHeadphonesAlt,
  faSearch,
  faHeart,
  faPlayCircle,
  faStream
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const options = [
  { icon: faHeadphonesAlt, label: 'Discover'},
  { icon: faSearch, label: 'Search'},
  { icon: faHeart, label: 'Favourites'},
  { icon: faPlayCircle, label: 'Playlists'},
  { icon: faStream, label: 'Charts'},
]

const Menu: FC = () => {
  return (
    <ul className={styles.menu}>
      {options.map(({ icon, label }) => <MenuItem>
        <div className={styles.icon}><FontAwesomeIcon icon={icon} /></div>
        <span className={styles.label}>{label}</span>
      </MenuItem>)}
    </ul>
  )
}

export default Menu
