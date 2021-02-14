import React, { FC } from 'react'
import Avatar from './Avatar'
import Menu from './Menu'

const Sidebar: FC = () => {
  return (
    <>
      <Avatar name={'Bob Smith'} image={'/assets/images/avatar.svg'} />
      <Menu />
    </>
  )
}

export default Sidebar
