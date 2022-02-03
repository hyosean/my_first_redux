import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, delTodo, updateTodo} from '../reducers/todo';

const Todo = () => {
	const dispatch = useDispatch();
	const listItem = useSelector((state) => state.todoList);
	console.log(listItem);

	useEffect(() => {}, [listItem]);

	const onKeyDownInput = (e) => {
		//useCallback()으로 감싸야 하는가?
		const value = e.target.value;

		if (e.key === 'Enter') {
			dispatch(addTodo(value));
			e.target.value = '';
		}
	};

	const delateList = (e) => {
		console.log(e.target.id);
		dispatch(delTodo(e.target.id));
	};

	const onClickBtn = (id) => {
		console.log(id);
		let value = window.prompt('수정 입력');
		dispatch(updateTodo(id, value));
	};

	return (
		<>
			<h2>todo list</h2>
			<input type="text" onKeyDown={(e) => onKeyDownInput(e)} />

			<ul>
				{listItem.map((item, key) => (
					<li key={key} id={item.key} onDoubleClick={(e) => delateList(e)}>
						{item.todo}
						{item.key}
						<button onClick={() => onClickBtn(item.key)}>수정하기</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Todo;
