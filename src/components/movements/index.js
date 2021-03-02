import React from 'react';

import MovementItem from 'components/movementsItem';
import { movements as mock } from 'mocks/movements';

import styles from './styles.module.scss';

const movements = ({ handleShowHome }) => (
	<div className={styles.container}>
		<div className={styles.header}>
			<span>Tus movimientos</span>
			<span onClick={handleShowHome}>Ver todos</span>
		</div>

		<div className={styles.list}>
			{mock.map(data => <MovementItem {...data} />)}
		</div>
	</div>
);

export default movements;
