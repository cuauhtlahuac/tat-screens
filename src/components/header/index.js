import styles from './styles.module.scss'

const header = ({ children }) => {
  return (
    <div className={styles.container}>
      
      {children}
    </div>
  )
}

export default header
