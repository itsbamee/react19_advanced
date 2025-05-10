import { useContext } from 'react';
import GlobalContext from './GlobalData.js';

export default function Header() {
	const data = useContext(GlobalContext);
	return (
		<header>
			<h1>header: {data}</h1>
		</header>
	);
}
