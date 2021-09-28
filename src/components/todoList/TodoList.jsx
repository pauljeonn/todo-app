import React from 'react';
import { useTodoState } from '../../TodoContext';
import TodoItem from '../todoItem/TodoItem';
import './todoList.scss';

const TodoList = () => {
	const state = useTodoState();
	console.log(state);

	return (
		<div className="todo-list">
			<TodoItem text="설거지하기" done={true} />
			<TodoItem text="자바스크립트 공부하기" done={true} />
			<TodoItem text="프로젝트 생성하기" done={true} />
			<TodoItem text="분리수거하기" done={false} />
		</div>
	);
};

export default TodoList;
