// 프론트에서 전달된 값을 서버에서 응답하는 로직을 흉내낸 함수

import { useActionState } from 'react';

//useActionState에 연결된 핸들러 함수의 파라미터 (초기 상태값, 폼안에 있는 모든 입력값들이 name값을 프로퍼티이름으로 해서 하나의 객체로 전달받아짐)
async function serverResponse(prevState, formData) {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// formData로 전달받아진 값을 객체.get()
	return {
		message: `로그인 성공, ${formData.get('username')}님 반갑습니다.`,
		username: formData.get('username'),
		age: formData.get('age'),
		gender: formData.get('gender'),
	};
}

export default function App() {
	// [서버에서 응답된 상태값, 서버 상태값을 변경할 수 있는 전용함수] = useActionState(서버응답함수, 전달할 초기 상태값)
	const [state, formAction] = useActionState(serverResponse, { message: '' });
	console.log(state);

	return (
		<>
			<form action={formAction}>
				<input type='text' name='username' placeholder='이름' />
				<br />
				<input type='text' name='age' placeholder='나이' />
				<br />
				<label htmlFor='male'>남성</label>
				<input type='radio' name='gender' defaultValue='male' id='male' />
				<label htmlFor='female'>여성</label>
				<input type='radio' name='gender' defaultValue='female' id='female' />
				<br />
				<button type='reset'>취소</button>
				<button type='submit'>전송</button>
			</form>
			<p>{state.message}</p>
		</>
	);
}
/*
	useActionState의 이점
	1. form 요소에 바로 action을 통해서 서버쪽으로 클라이언트 데이터를 바로 전달 가능
	2. 각 폼의 항목에 대응하는 state를 일일이 생성할 필요없음
	3. 서버 응답이 받아지면 useEffect나 fetch문 없이 바로 useActionState가 반환하는 값을 상태값을 전달 가능
*/

/*
	useActionState
	- 폼에서 제출되는 여러개의 상태값을 구조적으로 관리할 수 있게 해주는 훅
	- 폼 항목마다 개별적으로 상태를 만들어서 관리하는 방식이 아닌 form 안쪽의 모든 값들을 객체형태로 전달하고 전달받는 형태
	- 서버에서 응답하는 상태를 자동으로 관리 가능
	- 폼에 사용자 이름을 입력해서 전송하면 서버에서 응답 후 응답된 값을 다시 컴포넌트에 받아서 화면에 출력
*/
