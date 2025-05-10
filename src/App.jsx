import Content from './Content';
import Header from './Header';
import GlobalContext from './GlobalData';

export default function App() {
	//전역으로 공유할 새로운 데이터
	const newGlobalData = '컴포넌트 마운트 후 전역에 전달할 값';

	return (
		<>
			{/* 자체 Provider 컴포넌트로 새로운 데이터로 전역데이터 변경처리 */}
			<GlobalContext.Provider value={newGlobalData}>
				<Header />
				<Content />
			</GlobalContext.Provider>
		</>
	);
}
