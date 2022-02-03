import './App.css';

//리덕스 셋팅
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducers/index';
//
import Counter from './components/Counter';
import Todo from './components/Todo';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
	return (
		<Provider store={store}>
			{/* 스토어 배치 */}
			<div className="App">
				<Counter />
				<Todo />
			</div>
		</Provider>
	);
}

export default App;
