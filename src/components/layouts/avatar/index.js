import React from 'react'

import styles from './styles.module.scss'

const defaultPicture = "https://avatars.githubusercontent.com/u/30091387?s=460&u=b8fe406cb5165e70e0f3855f4485a3dd0003aebd&v=4";

const avatar = ({ picture = defaultPicture }) => {
  return (
      <img
        alt="Profile"
        className={styles.container}
        src={picture}
      />
  )
}

export default avatar;
