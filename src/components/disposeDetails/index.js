import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const disposeDetails = ({ icon = () => null, label, amount }) => {

	const Icon = icon;

	return (
		<span className={styles.container}>
			<span className={styles.wrapper}>
				<Icon className={styles.icon} />
				<span className={styles.label}>{label}</span>
			</span>
			<span className={styles.amount}>{`$${amount}.00`}</span>
		</span>
	);
};

disposeDetails.propTypes = {
	icon: PropTypes.element,
	label: PropTypes.string,
	amount: PropTypes.number,
};

export default disposeDetails;
