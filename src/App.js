import { useState } from 'react';

import Disposition from 'containers/disposition';
import Home from 'containers/home';
import './styles.scss';

function App() {
	const [ showHome, setShowHome ] = useState(true);

	const handleShowHome = () => {
		setShowHome(!showHome);
	};
	return (
		<div>
			{showHome ? (
				<Home handleShowHome={handleShowHome} />
			) : (
				<Disposition handleShowHome={handleShowHome} />
			)}
		</div>
	);
}

export default App;
