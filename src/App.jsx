import { useState } from 'react';

export default function App() {
	const [InputValue, setInputValue] = useState('');
	const [MovieDate, setMovieDate] = useState([]);

	// 아래와 같이 복수개의 상태값을 동시에 변경처리 할 때 로직이 무겁고 시간이 오래걸리는 상태변경 로직이 같이 있으면
	// 우선순위를 구분하지 않았을 때 긴급하게 처리되야 하는 상태 업데이트까지 같이 늦어지면서 사용성이 나빠짐
	const handleChange = (e) => {
		// 실제 input에 반영되는 긴급 상태값
		setInputValue(e.target.value);

		const newData = [];
		for (let i = 0; i < 10000000; i++) {
			newData.push(i);
		}
		// 실시간 반영할 필요가 없는 비긴급 상태값
		setMovieDate(newData);
	};

	return (
		<>
			<h1>useTransition</h1>

			<input type='text' value={InputValue} onChange={handleChange} />
		</>
	);
}
/*
	useTransition
	- 리액트 컴포넌트에 state값의 변경처리 우선순위를 차등해서 긴급한 상태변경과 덜 긴급한 상태변경사항을 관리하는 훅
	- useTransition으로 상태 업데이트의 순서의 우선순위를 차등 적용해야 되는 사례
	- 폼요소에 입력값을 바탕으로 실시간으로 서버 데이터 호출 및 렌더링 해야될 때

	- 작업순서1: 인풋에 검색어 입력 -> 인풋요소에 입력하고 있는 검색내용이 출력됨
	- 작업순서2: 인풋에 반영되고 있는 상태값에 따라 서버 데이터 fetching이나 기타 무거운 로직 수행
	- 작업순서3: 로직 수행이 완료되면 완료된 데이터를 다시 새로운 상태에 담아서 화면에 출력

	위와 같은 순서의 작업을 할 때, 상태 값이 2개 필요 (input 출력용 상태값, 수행 완료된 서버데이터를 화면에 출력용 상태값)
	- input용 상태값은 로직처리가 무겁지 않고 화면에 바로바로 반영해야 되는 데이터 (Urgent Update)
	- 서버 데이터 출력용 상태값은 로직처리가 무겁고 화면에 바로바로 출력할 필요가 없는 데이터 (Not Urgent Update)

*/
