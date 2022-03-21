import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ADD_TODOS, CLEAR_TODOS, REMOVE_TODOS } from '../components/Todos/Constant'
import { watchAddTodos } from './saga';
import userReducer from '../reducers/userReducer';

const sagaMiddleware = createSagaMiddleware()
let initialState = {
	list: [
		{
			id: 2,
			data: 'my name'
		},
		{
			id: 3,
			data: 'my name3'
		}
	]
}
const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODOS_ASYNC":
			return {
				...state,
				list: [
					...state.list,
					{
						id: action.payload.id,
						data: action.payload.data
					}
				]
			}

		case REMOVE_TODOS:
			let id = action.payload.id;
			let newList = state.list.filter(item => item.id !== id);
			return {
				list: newList
			}
		case CLEAR_TODOS:
			return {
				list: []
			}
		default:
			return state;
	}
}
const rootReducer = combineReducers({ todos: todosReducer, post: userReducer })
const enhancer = compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(watchAddTodos);
export default store;