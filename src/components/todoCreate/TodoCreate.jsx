import { buildQueries } from '@testing-library/dom';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CircleButton = styled.div`
	background: #0ca678;
	z-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, 50%);

	font-size: 45px;
	color: white;
	border-radius: 50%;

	border: none;
	outline: none;

	&:hover {
		background: #a2e3cf;
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

const TodoCreate = () => {
	const [open, setOpen] = useState(false);
	const onToggle = () => setOpen(!open);

	return (
		<CircleButton onClick={onToggle} open={open}>
			<i className="fas fa-plus"></i>
		</CircleButton>
	);
};

export default TodoCreate;
