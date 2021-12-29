import React from 'react';
import { useTodoState } from '../../TodoContext';
import './todoHead.scss';

const TodoHead = () => {
	const todos = useTodoState();
	const undoneTasks = todos.filter((todo) => !todo.done);

	const today = new Date();
	const dateString = today.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'short',
	});

	return (
		<div className="todo-head">
			<h1>{dateString}</h1>
			<div className="todo-left">
				{undoneTasks.length !== 0
					? `남은 할 일: ${undoneTasks.length}개`
					: '모든 할 일을 완료했습니다!'}
			</div>
		</div>
	);
};

export default TodoHead;
