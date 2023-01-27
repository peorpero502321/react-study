
import { useState, useEffect } from 'react';

/* 
 * useEffect 유용한점 1
 * 스테이트 값의 변화에 따라 컴포넌트랜더링 여부 구분
 * 
 */
function UseEffect() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	useEffect(() => {
        // 컴포넌트 동작시 한번만 실행
		console.log("I run Oonly once");
	}, []);
	useEffect(() => {
        // 최초실행, counter 변경시 실행
		console.log("I run when 'counter' changes");
	}, [counter]);
	useEffect(() => {
        // 최초실행, keyword 변경시 실행
        console.log("I run when 'keyword' changes", keyword);
	}, [keyword]);
	useEffect(() => {
        // 최초실행, counter, keyword 변경시 실행
		console.log("I run when 'counter & keyword' changes", keyword);
	}, [counter, keyword]);

	return (
		<div>
			<input 
			value={keyword}
			onChange={onChange}
			type="text" 
			placeholder="Serach here..."
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>
			Continue	
			 </button>
		</div>
	);
}

export default UseEffect;
