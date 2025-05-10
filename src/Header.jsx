import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

export default function Header() {
	//자식 컴포넌트에서는 useContext로 전역 컨텍스트값 호출 가능
	const data = useContext(GlobalContext);
	return (
		<header>
			<h1>header</h1>
		</header>
	);
}
