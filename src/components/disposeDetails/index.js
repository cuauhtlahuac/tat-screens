import PropTypes from 'prop-types';

import Label from 'components/layouts/label';

import styles from './styles.module.scss';

const disposeDetails = ({ Icon, label, amount }) => {
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
	Icon: PropTypes.node,
	label: PropTypes.string,
	amount: PropTypes.number,
};

export default disposeDetails;
