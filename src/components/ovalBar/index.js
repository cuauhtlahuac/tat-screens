import Circle from './circle';

import styles from './styles.module.scss';

const ovalBar = () => (
	<div className={styles.container}>
		<div className={styles.info}>
			<span className={styles.label}>Tu pago mensual</span>
			<span className={styles.amount}>$12.000.00</span>
			<span className={styles.plazo}>a 60 meses</span>
			<span className={styles.tasa}>Tasa de interés</span>
			<span className={styles.tasa}>16.6%</span>
		</div>

		<div className={styles.circle}>
			<Circle />
		</div>
	</div>
);

export default ovalBar;
