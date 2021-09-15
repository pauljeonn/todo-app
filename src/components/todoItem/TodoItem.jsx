import React from 'react';
import './todoItem.scss';

const TodoItem = ({ id, done, text }) => {
	return (
		<div className="todo-item">
			<div className="check-circle" done={done}></div>
			<div className="text" done={done}>
				{text}
			</div>
		</div>
	);
};

export default TodoItem;
