import styles from './styles.module.scss';
import Avatar from 'components/layouts/avatar';

const Hello = ({ name = 'Rodrigo' }) => {
	return (
		<div className={styles.container}>
			<span className={styles.label}>Hola { name }</span>
			<div className={styles.avatar}>
				<Avatar />
			</div>
		</div>
	);
};

export default Hello;
