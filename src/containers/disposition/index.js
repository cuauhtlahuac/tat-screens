import styles from './styles.module.scss';

import Dispose from 'components/dispose';
import InputText from 'components/layouts/inputText';
import BigButton from 'components/layouts/buttons/bigButton';
import OvalBar from 'components/ovalBar';

const Disposition = ({ handleShowHome }) => (
	<div className={styles.container}>
		<div className={styles.header}>
			<span>&#8592;</span>
			<span onClick={handleShowHome}>CANCELAR</span>
		</div>

		<div className={styles.header}>
			<span>Tus movimientos</span>
		</div>

		<Dispose text="Tienes disponible" />
		<div className={styles.block} />
		<div className={styles.wrapper}>
			<InputText placeholder="Auto" />
			<InputText placeholder="$350, 000.00" />
		</div>

		<div className={styles.plazo}>
			<span>Selecciona tu plazo</span>
		</div>

		<div className={styles.pago}>
			<OvalBar />
		</div>
		<BigButton />
	</div>
);

// const Disposition = ({ handleShowHome }) => <OvalBar />;

export default Disposition;
