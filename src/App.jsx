import { useRef } from 'react';

function App() {
	console.log('re-render');
	const inputRef = useRef(null); // {current: null} 담겨있을 것

	//폼 입력값을 확인하는 함수
	const checkValue = () => {
		console.log(inputRef.current.value);
	};

	//input 요소의 값 초기화 함수
	const resetValue = () => {
		inputRef.current.value = '';
	};

	return (
		<>
			<h1>비제어 컴포넌트(Uncontrolled Component)</h1>

			<input type='text' ref={inputRef} />
			<button onClick={checkValue}>폼 입력값 확인</button>
			<button onClick={resetValue}>폼 입력값 초기화</button>
		</>
	);
}

/*
  useRef를 통한 비제어 컴포넌트
  - 위와 같이 불필요한 상태의 변경없이 컴포넌트를 재렌더링하지 않으면서 입력값을 변경하는 대표적 비제어 컴포넌트
  - 폼 요소에 state를 연결해서 관리하는 방식이 아닌 그냥 일반 dom의 기능을 활용하고 있음
  - state 변경이 일어나는 것이 아니라 input에 값이 변경되도 컴포넌트 재렌더링 안됨
  - 이벤트가 발생해도 state가 아닌 useRef로 생성한 참조객체 값을 변경하므로 재렌더링 안됨
  - 장점 : 불필요한 렌더링을 발생시키지 않기 때문에 코드가 간결하고 성능에서 이점이 있음
  - 단점 : useRef를 통해 생성된 참조객체 값은 리액트가 변화점을 인지할 수 없기 때문에 개발자가 일일이 변경사항을 관리해야 됨 
*/

export default App;
