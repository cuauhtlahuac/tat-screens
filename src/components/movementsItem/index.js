import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const item = ({
	img = {
		url:
			'https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg',
		description: 'car',
	},
	moveType = { label: 'Auto', time: '2m' },
	moveDesc = { short: 'Mis logros', amount: '$350,000.00' },
}) => {
	return (
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
};

item.propTypes = {
	img: PropTypes.object,
	moveType: PropTypes.object,
	moveDesc: PropTypes.object,
};

export default item;
