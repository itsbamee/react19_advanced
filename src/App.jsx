import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function App() {
	const [Wid, setWid] = useState(0);
	const refDiv = useRef(null);

	useEffect(() => {
		// 모션작업을 위해서 동적으로 UI 수치값을 변경해서 스타일 반영을 해야될 때 변경로직을 useEffect 안쪽에서 호출 시
		// 이미 브라우저에 페인트가 된 이후 실행되기 때문에 화면이 깜빡거리는 layout shift 발생
		// 상태값 변경을 통해서 리액트가 렌더링되고 화면에 페인트된 후 호출됨
		if (refDiv.current) {
			const widSize = refDiv.current.getBoundingClientRect().width;
			console.log('useEffect', widSize);
			setWid(widSize);
		}
	}, []);

	useLayoutEffect(() => {
		// 위와 같은 상황에서 동적으로 스타일 변경하는 로직을 useLayoutEffect에서 호출 시
		// 리액트 렌더링 후 브라우저 페인트 전에 실행하기 때문에 실제 화면에 출력하기 직전에 연산처리하므로 layout shift 발생하지 않음
		// 해당 구문은 상태값 변경을 통해서 리액트가 렌더링되고 화면에 페인트되기 직전에 호출됨
		if (refDiv.current) {
			const widSize = refDiv.current.getBoundingClientRect().width;
			console.log('useLayoutEffect', widSize);
			setWid(widSize);
		}
	}, []);

	return (
		<>
			<div ref={refDiv} style={{ width: '50%', background: 'pink', padding: '50px' }}>
				해당 요소의 너비와 높이는 가변형
			</div>
			<p>{Wid}</p>
		</>
	);
}
/*
	리액트 프로젝트가 구동되는 흐름
	1. 리액트 컴포넌트가 JSX를 반환
	2. 리액트 자체적으로 가상돔을 생성하면서 기존 돔 트리와 비교
	3. 변경된 부분이 반영된 실제 돔 트리 생성 (리액트에서의 렌더링)
	4. 실제 브라우저가 변경된 돔트리를 읽고 해석해서 구조에 맞게 화면 출력 (layout 계산, paint 화면에 그림)
		컴포넌트가 일단 렌더링 된 이후 재호출 되기 직전(useLayoutEffect)
	5. 이미 출력된 돔 트리의 내용을 다시 비교해서 추후 컴포넌트가 재호출 됨
		컴포넌트가 렌더링 되기 전 컴포넌트 호출 시 (useEffect)
	6. 추가 작업을 통해 state값 기반으로 다시 재렌더링 (1~3번 단계 반복)
*/
