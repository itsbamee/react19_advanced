import { useContext } from 'react';
import GlobalContext from './GlobalData.js';

export default function Content() {
	const data = useContext(GlobalContext);
	return (
		<main>
			<h1>content: {data}</h1>
		</main>
	);
}
