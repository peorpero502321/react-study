
import { useEffect, useState } from 'react';
/* 
 * useEffect 유용한점 2 
 * 컴포넌트 제거시 리턴으로 함수 실행가능 
 * 
 */
function  Hello() {

	function byFn() {
		console.log("byeFn :( ");
	}

	function hiFn() {

		// 컴포넌트 생성시 실행 hiFn내부 로직 실행
		console.log("created :) ");

		// 컴포넌트 제거시 byFn 메서드 실행
		return byFn;
	}
	// 1 번 -> 풀어 적은것 (상단 메서드 호출)
	useEffect(hiFn, []);

	// 2-1번 보통 사용법 
	useEffect(function() {

		// 컴포넌트 생성시 실행
		console.log("created :) ");
		return function() {
			// 컴포넌트 제거시 실행 
			console.log("byeFn :( ");
		}
	}, []);

	// 2-2번 보통 사용법 
	useEffect(()=> {

		// 컴포넌트 생성시 실행
		console.log("created :) ");
		return () => {
			// 컴포넌트 제거시 실행 
			console.log("byeFn :( ");
		}
	}, []);

	return <h1>Hello</h1>
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		
		<div>
			{showing ? <Hello />: null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
