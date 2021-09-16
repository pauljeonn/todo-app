import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import './todoList.scss';

const TodoList = () => {
	return (
		<div className="todo-list">
			<TodoItem text="설거지하기" done={true} />
			<TodoItem text="자바스크립트 공부하기" done={true} />
			<TodoItem text="프로젝트 생성하기" done={true} />
		</div>
	);
};

export default TodoList;
