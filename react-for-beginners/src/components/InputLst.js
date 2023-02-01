import { useState } from 'react';

function InputLst() {
	const [toDo, setTodo] = useState('');
	const [toDos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === '') {
			return;
		}
		setTodos((currentArray) => [toDo, ...currentArray]);
		setTodo('');
	};
	console.log(toDos);
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type='text'
					placeholder='Write your to do...'
				/>
				<button>Add to do</button>
			</form>
		</div>
	);
}
export default InputLst;
