import { ADD_TODOS, CLEAR_TODOS, REMOVE_TODOS } from "./Constant"
export const addTodos = (data) => {
	return {
		type: ADD_TODOS,
		payload: {
			id: Math.random(),
			data: data
		}
	}
}

export const removeTodos = (id) => {
	return {
		type: REMOVE_TODOS,
		payload: { id: id }
	}
}

export const clearTodos = () => {
	return {
		type: CLEAR_TODOS,
	}
}