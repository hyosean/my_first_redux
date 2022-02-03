import {combineReducers} from 'redux';
import {counter} from './exercise';
import {todoList} from './todo';

export const rootReducer = combineReducers({counter, todoList});
//모든 reducer를 합친 변수
