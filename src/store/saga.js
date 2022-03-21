import { call, delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";
const name = () => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(result => result)
		.catch(err => console.warn("error" + err))
}
function* userRequetsAsync() {
	try {
		const result = yield call(name)
		yield delay(999)
		yield put({ type: 'USER_REQUEST_RECEIVED', payload: { post: result } })

	}
	catch (error) {
		console.log("ERROR: " + error)
		yield put({ type: 'USER_REQUEST_FAILED', payload: { post: error } })
	}

}

function* addTodosAsync(data) {
	yield put({
		type: "ADD_TODOS_ASYNC",
		payload: {
			id: data.payload.id,
			data: data.payload.data,
		}
	});
}

export function* watchAddTodos() {
	yield takeLatest("ADD_TODOS", addTodosAsync);
	yield takeLatest("USER_REQUEST", userRequetsAsync);
}