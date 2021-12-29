import React from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../../TodoContext';

const CheckCircle = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 2px solid #ff7f50;
	font-size: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			border: 2px solid #ff7f50;
			color: #ff7f50; ;
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
		color: #ff7f50;
	}
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;

	&:hover {
		${Remove} {
			opacity: 1;
		}
	}
`;

const TodoItem = ({ id, done, text, isLog }) => {
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

	// 완료된 일과 남은 할일 분리해서 보여주기
	return !isLog
		? !done && (
				<TodoItemBlock>
					<CheckCircle done={done} onClick={onToggle}>
						{done && <i className="fas fa-check"></i>}
					</CheckCircle>
					<Text done={done}>{text}</Text>
					<Remove onClick={onRemove}>
						<i className="fas fa-trash"></i>
					</Remove>
				</TodoItemBlock>
		  )
		: done && (
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
