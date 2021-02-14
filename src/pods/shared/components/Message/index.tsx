import React, { FC, ReactNode } from 'react'

import styles from './Message.module.scss'

interface Props {
  children: ReactNode
}

const Message: FC<Props> = ({ children }) => {
  return <div className={styles.message}>{children}</div>
}

export default Message
