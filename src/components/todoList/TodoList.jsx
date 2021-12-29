import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../TodoContext';
import TodoItem from '../todoItem/TodoItem';
import './todoList.scss';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 88px;
	overflow-y: auto;
`;

const TodoList = () => {
	const todos = useTodoState();

	return (
		<TodoListBlock>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					done={todo.done}
				/>
			))}
		</TodoListBlock>
	);
};

export default TodoList;
