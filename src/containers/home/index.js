import Dispose from 'components/dispose';
import Header from 'components/header';
import ItemsContainer from 'components/itemsContainer';
import Movements from 'components/movements';
import NextPay from 'components/nextPay';
import Hello from 'components/hello';

import styles from './styles.module.scss';

const Home = ({ handleShowHome }) => (
	<div className={styles.container}>
		<Header>
			<Hello />
		</Header>
		<Dispose />
		<ItemsContainer />
		<NextPay />
		<Movements handleShowHome={handleShowHome} />
	</div>
);

export default Home;
