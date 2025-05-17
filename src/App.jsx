import { useDeferredValue, useState } from 'react';

export default function App() {
	const [InputValue, setInputValue] = useState('');
	// useDeferredValue를 통해서 특정 상태값을 지연시켜서 새로운 상태값 생성
	const deferredValue = useDeferredValue(InputValue);
	// 새로운 상태값 활용해서 1만번 반복도는 무거운 로직을 일부러 실행
	// 이때 deferredValue로 상태값 반영 자체가 지연되기 때문에 InputValue의 상태값이 바뀔때마다 해당 repeat함수가 바로바로 실행되는 것이 아닌
	// 일정한 지연텀을 두면서 호출되므로 resultValue에 대한 재렌더링 처리는 줄어듬 (리액트의 렌더링 소비비용 감소)
	const resultValue = deferredValue.repeat(100);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<h1>useTransition</h1>
			<input type='text' value={InputValue} onChange={handleChange} />
			<p>지연처리된 상태 값 : {resultValue}</p>
		</>
	);
}
/*
	useDeferredValue
	- useTransition처럼 실제 상태값의 우선순위를 연산을 지연시키는 것이 아닌 특정 상태값의 사용을 지연시킴
	- 물리적인 상태값 연산의 지연이 아닌 그냥 상태값 활용을 지연시키는 이유 -> 불필요한 렌더링 횟수 줄이기 위함
	- useTransition이 복수개의 상태값중에서도 특정 상태값의 연산자체를 지연시키는 반면
	- useDeferredValue는 그냥 하나의 값의 사용자체를 지연시킴
*/
