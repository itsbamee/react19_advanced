import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

export default function Counter() {
	const { GlobalState, dispatch } = useContext(GlobalContext);
	console.log(GlobalState);

	return (
		<div>
			<h1>{GlobalState.count}</h1>
			{/* dispatch 함수로 type이 있는 액션객체를 전달하면 리듀서 함수가 해당 액션객체의 타입을 확인해서 전역데이터 변경처리 */}
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
		</div>
	);
}
