import { BsStarFill } from 'react-icons/bs';
import { BsTagFill } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const itemContainer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.itemWrapper}>
				<BsStarFill size={20} />
				<span className={styles.label}>Crear logro</span>
			</div>
			<div className={styles.itemWrapper}>
				<BsTagFill size={20} />
				<span className={styles.label}>Crear logro</span>
			</div>
			<div className={styles.itemWrapper}>
				<BsBellFill size={20} />
				<span className={styles.label}>Crear logro</span>
			</div>
		</div>
	);
};

export default itemContainer;
