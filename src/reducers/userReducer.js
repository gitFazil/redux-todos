let initialState = {
	post: [
	],
	isLoading: false,
	color: ''
}
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_REQUEST":
			return {
				isLoading: true
			}

		case 'USER_REQUEST_RECEIVED':
			return {
				post: action.payload.post,
				isLoading: false
			}
		case "USER_REQUEST_FAILED":
			return {
				post: action.payload.error,
				isLoading: false
			}
		case 'ChangeColor': return {
			color: action.payload
		}
		default:
			return state;
	}
}
export default userReducer;