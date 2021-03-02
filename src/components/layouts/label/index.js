import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const label = ({ text = 'label', type = '1' }) => (
	<span className={type === '1' ? styles.type1 : styles.type2}>{text}</span>
);

label.propTypes = {
	text: PropTypes.string,
	type: PropTypes.oneOf([ '1', '2' ]),
};

export default label;
