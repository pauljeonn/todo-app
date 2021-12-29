import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../../TodoContext';
import { FaPlus } from 'react-icons/fa';

const Container = styled.div`
	margin-top: 30px;
	width: 40%;
	max-width: 600px;
	height: 75vh;
	max-height: 800px;
	position: relative;
	background-color: white;
	border-radius: 15px;
	box-shadow: 0 0 20px gray;
	display: flex;
	flex-direction: column;

	@media (max-width: 1000px) {
		width: 60%;
		height: 80vh;
	}

	@media (max-width: 480px) {
		width: 95%;
		height: 80vh;
	}
`;

const TodoCreate = styled.div`
	width: 100%;
	height: 60px;
	position: absolute;
	bottom: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CreateWrapper = styled.div`
	width: 90%;
	height: 100%;
	border: none;
	border-radius: 10px;
	box-sizing: border-box;
	background-color: #ddd;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

const CreateInput = styled.input`
	width: 85%;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 18px;
`;

const CreateButton = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #ff7f50;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	color: white;
	cursor: pointer;
	z-index: 3;
`;

const TodoTemplate = ({ children }) => {
	const [input, setInput] = useState('');
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();

	const createTodo = () => {
		dispatch({
			type: 'CREATE',
			todo: {
				id: nextId.current,
				text: input,
				done: false,
			},
		});

		nextId.current += 1;
		setInput('');
	};

	return (
		<Container>
			{children}
			<TodoCreate>
				<CreateWrapper>
					<CreateInput
						onChange={(e) => setInput(e.target.value)}
						// 엔터 클릭 시에도 createTodo 함수 실행
						onKeyPress={(e) => {
							e.key === 'Enter' && createTodo();
						}}
						value={input}
					/>
					<CreateButton onClick={createTodo}>
						<FaPlus />
					</CreateButton>
				</CreateWrapper>
			</TodoCreate>
		</Container>
	);
};

export default TodoTemplate;
