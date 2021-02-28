import Dispose from 'components/dispose';
import Header from 'components/header';
import ItemsContainer from 'components/itemsContainer';
import Movements from 'components/movements';
import NextPay from 'components/nextPay';

import styles from './styles.module.scss';

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Dispose />
			<ItemsContainer />
			<NextPay />
			<Movements />
		</div>
	);
};

export default Home;
