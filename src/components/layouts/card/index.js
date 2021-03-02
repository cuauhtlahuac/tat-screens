import React from 'react';

import styles from './styles.module.scss';

const card = ({ children }) => (
	<div className={styles.container}>{children}</div>
);

export default card;
