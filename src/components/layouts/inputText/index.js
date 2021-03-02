import React from 'react';

import styles from './styles.module.scss';

const input = ({ value = 'auto', placeholder = 'placeholder' }) => (
	<div className={styles.container}>
		<input type="text" className={styles.input} placeholder={placeholder} />
	</div>
);

export default input;
