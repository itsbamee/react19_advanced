import { useState } from 'react';

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

/*
  제어 컴포넌트 정리
  - 위와 같은 제어 컴포넌트는 사용자 이벤트가 발생할때마다 실시간으로 상태에 변경사항을 담고 재랜더링하는 방식
  - 때문에 폼에서 발생하는 모든 데이터를 리액트가 완벽히 제어하면서 관리 가능
  - 장점 :대규모 프로젝트에서 복잡한 폼 데이터를 효율적으로 관리하기 위해 리액트에서 자주 쓰는 방식
  - 단점 : 하지만 사용자가 입력한 값을 실시간으로 동기화시킬 필요가 없는 간단한 로직도 이런 방식으로 개발시 개발 코드의 복잡도 올라감
  - 단점 : 또한 너무 잦은 재 랜더링을 통해 불필요한 리소스 낭비
*/

export default App;
