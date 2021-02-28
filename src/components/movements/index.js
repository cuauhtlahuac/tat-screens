import React from 'react'

import MovementItem from 'components/movementsItem'

import styles from './styles.module.scss'

const movements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Tus movimientos</span>
      </div>
    <div className={styles.list}>

    <MovementItem />
    <MovementItem />
    <MovementItem />
    <MovementItem />
    <MovementItem />
    </div>


    </div>
  )
}

export default movements
