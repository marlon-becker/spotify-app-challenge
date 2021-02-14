import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH,
  faHeart,
  faRandom,
  faVolumeDown
} from '@fortawesome/free-solid-svg-icons'

import styles from './Player.module.scss'

const Player: FC = () => {
  return (
    <div className={styles.player}>
      <div className={styles.playing}>
        <div className={styles.song} /> Nothing's playing
      </div>
      <div className={styles.controls}>
        <FontAwesomeIcon className={styles.controlIcon} icon={faStepBackward} />
        <FontAwesomeIcon className={styles.playIcon} icon={faPlayCircle} />
        <FontAwesomeIcon className={styles.controlIcon} icon={faStepForward} />
      </div>
      <div className={styles.time} />
      <div className={styles.actions}>
        <FontAwesomeIcon className={styles.ellipsis} icon={faEllipsisH} />
        <FontAwesomeIcon className={styles.action} icon={faHeart} />
        <FontAwesomeIcon className={styles.action} icon={faRandom} />
        <FontAwesomeIcon className={styles.action} icon={faVolumeDown} />

      </div>
    </div>
  )
}

export default Player
