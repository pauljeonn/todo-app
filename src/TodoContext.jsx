import { findRenderedComponentWithType } from 'react-dom/test-utils';
import React, { useReducer } from 'react';

const initialTodos = [
	{
		id: 1,
		text: '컴포넌트 스타일링하기',
		done: false,
	},
];

function todoReducer(state, action) {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.todo);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}
