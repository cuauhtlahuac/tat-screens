import React from 'react';

import Card from 'components/layouts/card';
import Label from 'components/layouts/label';
import DisposeDetails from 'components/disposeDetails';
import { BsBagFill } from 'react-icons/bs';
import { BsCreditCard } from 'react-icons/bs';
import SmallButton from 'components/layouts/buttons/smallButton';

import styles from './styles.module.scss';

const nextPay = () => (
	<div className={styles.container}>
		<Card>
			<span className={styles.wrapper}>
				<Label text="Tu próximo pago" type="1" />
				<span className={styles.money}>$28,860.00</span>

				<span className={styles.row}>
					<span className={styles.column}>
						<Label text="Fecha de pago" type="1" />
						<span className={styles.date}>16 de Enero</span>
					</span>

					<SmallButton />
				</span>

				<DisposeDetails icon={BsBagFill} label="Mis logros" amount={27260.0} />

				<DisposeDetails
					icon={BsCreditCard}
					label="Compras con TDC"
					amount={1600.0}
				/>
			</span>
		</Card>
	</div>
);

export default nextPay;
