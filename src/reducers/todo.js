//투두기능
const ADD = 'todo/ADD';
const DEL = 'todo/DEL';
const UPDATE = 'todo/UPDATE';

//액션크리에이터
export const addTodo = (value) => {
	return {type: ADD, payload: value};
};

export const delTodo = (id) => {
	return {type: DEL, id};
};

export const updateTodo = (id, value) => {
	return {
		type: UPDATE,
		payload: {
			id,
			value,
		},
	};
};

const list = [];
let last_index = 0;
//리듀서
export const todoList = (state = list, action) => {
	switch (action.type) {
		case ADD:
			return [...state, {todo: action.payload, key: last_index++}];
		case DEL:
			return state.filter((cur) => cur.key != action.id);
		case UPDATE:
			return state.map((cur) => {
				if (cur.key == action.payload.id) {
					return {todo: action.payload.value, key: action.payload.id};
				} else {
					return cur;
				}
			});
		default:
			return state;
	}
};
