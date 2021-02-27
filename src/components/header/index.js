import React from 'react'

import styles from './styles.module.scss'

const header = ({children}) => {
  return (
    <div className={styles.container}>
    <p>HEADER</p>
      {children}
    </div>
  )
}

export default header
