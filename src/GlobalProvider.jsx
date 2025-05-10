import { createContext } from 'react';

//초기 상태 설정
const initalState = { count: 0 };

//전역 컨텍스트 생성 후 export (전역 상태)
export const GlobalContext = createContext(initalState);

//전역 컨텍스트 값을 컴포넌트에 전달해주는 wrapping 형태의 provider도 export
export function GlobalProvider({ children }) {
	return <GlobalContext.Provider value={initalState}>{children}</GlobalContext.Provider>;
}
