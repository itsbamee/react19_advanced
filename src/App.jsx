import { useState } from 'react';

// useState 훅을 통한 state 기반으로 화면 렌더링이 자동으로 일어나는 제어 컴포넌트 생성
function App() {
	console.log('re-render');
	const [Text, setText] = useState('');

	//change 이벤트 발생시 실행될 함수
	//입력하고 있는 요소의 value값을 실시간으로 Text상태값에 담아주는 함수
	const handleChange = (e) => {
		console.log(e.target.value);
		setText(e.target.value);
	};

	//Text상태의 값을 강제로 비우는 함수
	const handleReset = () => {
		setText('');
	};

	return (
		<>
			<h1>제어 컴포넌트 (Controlled Component)</h1>

			<input type='text' value={Text} onChange={handleChange} />

			<button onClick={handleReset}>초기화</button>
			<p>입력값 : {Text}</p>
		</>
	);
}

export default App;
