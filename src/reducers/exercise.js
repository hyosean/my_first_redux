//액션정의 //변수를 대문자로 정의 action type definition
//"리듀서 / 동작이름"
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//action creator
export const increase = () => {
	return {type: INCREASE};
};
export const decrease = () => {
	return {type: DECREASE};
};

//reducer

// 변수 초기화 //initialstate 명시적 초기값
const inistate = {
	number: 0,
};

export const counter = (state = inistate, action) => {
	switch (action.type) {
		case INCREASE:
			return {...state, number: state.number + 1};
		case DECREASE:
			return {...state, number: state.number - 1};
		default:
			return state;
	}
};
