import React from 'react'

import styles from './styles.module.scss'

const card = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default card;