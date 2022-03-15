import { delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";

function* addTodosAsync(data) {
	yield delay(4000);
	yield put({
		type: "ADD_TODOS_ASYNC", payload: {
			id: data.payload.id,
			data: data.payload.data
		}
	});
}

export function* watchAddTodos() {
	yield takeLatest("ADD_TODOS", addTodosAsync);
}