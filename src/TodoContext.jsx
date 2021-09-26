import { findRenderedComponentWithType } from 'react-dom/test-utils';
import React, { createContext, useReducer, useContext } from 'react';

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

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
	const [state, dispatch] = useReducer(todoReducer, initialTodos);
	return (
		<TodoStateContext.provider value={state}>
			<TodoDispatchContext.Provider value={dispatch}>
				{children}
			</TodoDispatchContext.Provider>
		</TodoStateContext.provider>
	);
}

export function useTodoState() {
	return useContext(TodoStateContext);
}

export function useTodoDispatch() {
	return useContext(TodoDispatchContext);
}
