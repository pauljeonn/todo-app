import React from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../../TodoContext';

const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid #2473e7;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			border: 2px solid #2473e7;
			color: #2473e7;
		`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: black;
	${(props) =>
		props.done &&
		css`
			color: lightgray;
		`}
`;

const Remove = styled.div`
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: lightgray;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: red;
	}
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;

	&:hover {
		${Remove} {
			opacity: 1;
		}
	}
`;

const TodoItem = ({ id, done, text }) => {
	const dispatch = useTodoDispatch();

	const onToggle = () =>
		dispatch({
			type: 'TOGGLE',
			id,
		});

	const onRemove = () =>
		dispatch({
			type: 'REMOVE',
			id,
		});

	return (
		<TodoItemBlock>
			<CheckCircle done={done} onClick={onToggle}>
				{done && <i className="fas fa-check"></i>}
			</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove onClick={onRemove}>
				<i className="fas fa-trash"></i>
			</Remove>
		</TodoItemBlock>
	);
};

export default TodoItem;
