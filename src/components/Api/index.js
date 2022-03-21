import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const changeColor = (data) => {
	return {
		type: 'ChangeColor',
		payload: data

	}
}
export default function Api() {
	const [input, setInput] = useState('')
	const dispatch = useDispatch();
	useEffect(() => dispatch({ type: 'USER_REQUEST' }), [])
	const post = useSelector(state => state.post);
	console.log(post)
	const color = useSelector(state => state.post.color);
	return (
		<>
			{post.isLoading ?
				<h2>Loading</h2> : <div style={{ color: color }}>post</div>
			}
			<div>
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<button onClick={() => dispatch(changeColor(input))}>color</button>
			</div>
		</>
	)
}
