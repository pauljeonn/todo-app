import React from 'react';
import { useTodoState } from '../../TodoContext';
import './todoHead.scss';

const TodoHead = () => {
	const todos = useTodoState();
	const undoneTasks = todos.filter((todo) => !todo.done);
	console.log('undoneTasks: ', undoneTasks);

	const today = new Date();
	const dateString = today.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const dayName = today.toLocaleDateString('ko-KR', {
		weekday: 'long',
	});

	return (
		<div className="todo-head">
			<h1>{dateString}</h1>
			<div className="day">{dayName}</div>
			<div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
		</div>
	);
};

export default TodoHead;
