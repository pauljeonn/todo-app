import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../TodoContext';
import TodoItem from '../todoItem/TodoItem';
import './todoList.scss';
import { FaArrowLeft } from 'react-icons/fa';

const TodoListContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 95px;
	overflow-y: auto;
`;

const TodoToggle = styled.div`
	width: 110px;
	height: 32px;
	margin: 5px 35px;
	border: 2px solid #ff7f50;
	border-radius: 5px;
	background-color: ${(props) => (props.isLog ? '#ff7f50' : '#fff')};
	color: ${(props) => (props.isLog ? '#fff' : '#ff7f50')};
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const TodoListBlock = styled.div`
	padding: 20px 40px;
	padding-bottom: 20px;
	overflow-y: auto;
`;

const TodoList = () => {
	const todos = useTodoState();
	const [isLog, setIsLog] = useState(false);

	const toggleLog = () => {
		setIsLog(!isLog);
	};

	return (
		<TodoListContainer>
			<TodoToggle isLog={isLog} onClick={toggleLog}>
				{isLog ? (
					<>
						<FaArrowLeft />
					</>
				) : (
					'완료 목록 보기'
				)}
			</TodoToggle>
			<TodoListBlock>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						done={todo.done}
						isLog={isLog}
					/>
				))}
			</TodoListBlock>
		</TodoListContainer>
	);
};

export default TodoList;
