import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../../TodoContext';

const CircleButton = styled.div`
<<<<<<< HEAD
	background: #ff7f50;
=======
	background: #2473e7;
>>>>>>> df949c2c14ab2c1d25bb04389dffc0f927f83549
	z-index: 5;
	cursor: pointer;
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: -2%;
	bottom: 8%;
	transform: translate(-50%, 50%);
	font-size: 45px;
	color: white;
	border-radius: 50%;
	border: none;
	outline: none;
	box-shadow: 2px 2px 10px gray;

	&:hover {
		background: #709ee4;
	}

	&:active {
		background: red;
	}

	transition: 0.125s all ease-in;

	${(props) =>
		props.open &&
		css`
			background: red;

			&:hover {
				background: #f28f8f;
			}
			&:active {
				background: red;
			}
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const InsertFormPositioner = styled.div`
	width: 100%;
	bottom: 0;
	left: 0;
	position: absolute;
`;

const InsertForm = styled.form`
	background: lightgray;
	padding: 4%;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	border-top: 1px solid gray;
`;

const Input = styled.input`
	padding: 12px;
	border-radius: 4px;
	border: 1px solid gray;
	width: 85%;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
`;

const TodoCreate = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();

	const onToggle = () => setOpen(!open);
	const onChange = (e) => setValue(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: 'CREATE',
			todo: {
				id: nextId.current,
				text: value,
				done: false,
			},
		});

		setValue('');
		setOpen(false);
		nextId.current += 1;
	};

	// const nextId = useTodoNextId();
	return (
		<>
			{open && (
				<InsertFormPositioner>
					<InsertForm onSubmit={onSubmit}>
						<Input
							placeholder="할 일을 입력 후, Enter 를 누르세요."
							autoFocus
							onChange={onChange}
							value={value}
						/>
					</InsertForm>
				</InsertFormPositioner>
			)}
			<CircleButton onClick={onToggle} open={open}>
				<i className="fas fa-plus"></i>
			</CircleButton>
		</>
	);
};

export default React.memo(TodoCreate);
