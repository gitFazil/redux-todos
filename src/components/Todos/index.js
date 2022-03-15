import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, clearTodos, removeTodos } from './Action';


export default function Todos() {
	const [listItem, setListItem] = useState('');
	const [disabled, setDisabled] = useState(true);
	const dispatch = useDispatch();
	const lists = useSelector(state => state.list)

	const addList = () => {
		dispatch(addTodos(listItem))
		setListItem('');
	}
	const changeHandler = (e) => {
		setListItem(e.target.value);
		setDisabled(false)
	}
	return (
		<div className='todos'>
			<h2>TODOS</h2>
			<div>
				<input value={listItem} onChange={changeHandler} />
				<button onClick={addList} disabled={disabled}>ADD</button>
			</div>
			<button onClick={() => dispatch(clearTodos())}>Clear</button>
			<div>
				<ul>
					{lists.map(list => {
						return (
							<li key={list.id}>{list.data} <button className='danger' onClick={() => dispatch(removeTodos(list.id))}>X</button></li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
