import Header from 'components/header'
import ItemsContainer from 'components/itemsContainer'
import Movements from 'components/movements'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ItemsContainer />
      <Movements />
    </div>
  )
}

export default Home;
