import { createContext, useReducer } from 'react';

//초기 상태 설정
const initalState = { count: 0 };

//전역 컨텍스트를 변형시키는 리듀서 함수 생성
function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		default:
			throw new Error(`알 수 없는 액션: ${action.type}`);
	}
}

//전역 컨텍스트 생성 후 export (전역 상태)
const GlobalContext = createContext();

//전역 컨텍스트 값을 컴포넌트에 전달해주는 wrapping 형태의 provider도 export
export function GlobalProvider({ children }) {
	// const [변경된 전역상태값, 전역상태 변경 함수] = useReducer(리듀서함수, 전역상태에 담길 초기값)
	const [GlobalState, dispatch] = useReducer(reducer, initalState);
	return (
		//해당 컴포넌트로 루트 컴포넌트인 App을 감싸면 value를 통해
		// 초기 값인 initialState가 전역 컨텍스트에 담기면서 App 및 하위 컴포넌트에 전달 됨
		<GlobalContext.Provider value={{ GlobalState, dispatch }}>{children}</GlobalContext.Provider>
	);
}

//추가적으로 전역 컨텍스트를 자식 컴포넌트에서 자유롭게 호출 가능하도록 export
export { GlobalContext };
