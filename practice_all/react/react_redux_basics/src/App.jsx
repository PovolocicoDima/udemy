import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {asyncDecrementCreator, asyncIncrementCreator} from './store/countReducer';
import {fetchUsers} from './store/userReducer';

function App() {

	const count = useSelector(state => state.countReducer.count);
	const users = useSelector(state => state.userReducer.users);
	const dispatch = useDispatch();

  return (
		<div className='app'>
			<div className='count'>{count}</div>
			<div className='btns'>
				<button 
					className='btn' 
					onClick={() => dispatch(asyncIncrementCreator())}
				>
					Инкремент++
				</button>
				<button 
					className='btn'
					onClick={() => dispatch(asyncDecrementCreator())}
				>
					Декремент--
				</button>
				<button
					onClick={() => dispatch(fetchUsers())} 
					className='btn'
				>
					Получить юзеров--
				</button>
			</div>
			<div className='users'>
				{users.map(user => (
					<div
						key={user.id}
						className='user'>
						{user.name}
					</div>
				))}
			</div>
		</div>
  );
};

export default App;
