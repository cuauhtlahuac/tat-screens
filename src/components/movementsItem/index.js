import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const item = ({
	img = {
		url: '',
		description: '',
	},
	moveType = { label: '', time: '' },
	moveDesc = { short: '', amount: '' },
}) => (
	<div className={styles.container}>
		<img className={styles.img} src={img.url} alt={img.description} />

		<div className={styles.wrapper}>
			<div className={styles.row}>
				<span className={styles.label}>{moveType.label}</span>
				<span className={styles.time}>{moveType.time}</span>
			</div>

			<div className={styles.row}>
				<span className={styles.short}>{moveDesc.short}</span>
				<span className={styles.amount}>{moveDesc.amount}</span>
			</div>
		</div>
	</div>
);

item.propTypes = {
	img: PropTypes.object,
	moveType: PropTypes.object,
	moveDesc: PropTypes.object,
};

export default item;
