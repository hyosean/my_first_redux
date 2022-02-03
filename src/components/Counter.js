import {useDispatch, useSelector} from 'react-redux';
import {increase, decrease} from '../reducers/exercise';

const Counter = () => {
	const dispatch = useDispatch(); //sotre.dispatch 의 훅
	const number = useSelector((state) => state.counter.number); //store.getState 의 훅

	return (
		<div>
			<h3>{number}</h3>
			<button onClick={() => dispatch(increase())}>Inc</button>
			<button onClick={() => dispatch(decrease())}>Dec</button>
		</div>
	);
};

export default Counter;
