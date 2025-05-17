import { useState } from 'react';

export default function App() {
	const [InputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<h1>useTransition</h1>

			<input type='text' value={InputValue} onChange={handleChange} />
		</>
	);
}
