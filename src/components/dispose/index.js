import React from 'react';

import Card from 'components/layouts/card';
import Label from 'components/layouts/label';

import styles from './styles.module.scss';

const dispose = ({text="SALDO DISPONIBLE"}) => {
	return (
		<div className={styles.container}>
			<Card>
				<span className={styles.wrapper}>
					<Label text={text} type="2" />
					<span className={styles.money}>$1,499, 970.00</span>
				</span>
			</Card>
		</div>
	);
};

export default dispose;
